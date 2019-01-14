import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { compose as apolloCompose, graphql } from 'react-apollo';
import query from 'src/graphql/query';
import { withFirebase } from 'src/context/firebase';
import { setAuthUser } from 'src/modules/session';

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
      // LocalStorageにデータがあればログインさせる
      this.props.onSetAuthUser(JSON.parse(localStorage.getItem('authUser')));
    }

    componentDidMount() {
      this.listener = this.props.firebase.onAuthUserListener(
        async authUser => {
          if (this.props.authUser) return;

          const { uid, displayName } = authUser;
          const user = { uid, displayName };

          if (uid && displayName) {
            // googleでログイン
            this.props.createUser({ variables: { user } });
            localStorage.setItem('authUser', JSON.stringify(user));
            this.props.onSetAuthUser(user);
          }
          if (!displayName) {
            const storage = JSON.parse(sessionStorage.getItem('authUser'));
            sessionStorage.removeItem('authUser');

            if (storage && storage.name) {
              // emailで新規登録直後
              user.displayName = storage.name;
              user.categories = storage.categories;
              this.props.createUser({ variables: { user } });
              localStorage.setItem('authUser', JSON.stringify(user));
              this.props.onSetAuthUser(user);
            } else {
              // ログイン直後
              const {
                data: { fetchUser },
              } = await this.props.fetchUser({ variables: { uid } });
              localStorage.setItem('authUser', JSON.stringify(fetchUser));
              this.props.onSetAuthUser({ uid: fetchUser.uid, displayName: fetchUser.displayName });
            }
          }
        },
        () => {
          localStorage.removeItem('authUser');
          this.props.onSetAuthUser(null);
        },
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    authUser: state.session.authUser,
  });

  const mapDispatchToProps = dispatch => ({
    onSetAuthUser: authUser => dispatch(setAuthUser(authUser)),
  });

  return compose(
    withFirebase,
    connect(
      mapStateToProps,
      mapDispatchToProps,
    ),
  )(
    apolloCompose(
      graphql(query.createUser, { name: 'createUser' }),
      graphql(query.fetchUser, { name: 'fetchUser' }),
    )(WithAuthentication),
  );
};

export default withAuthentication;
