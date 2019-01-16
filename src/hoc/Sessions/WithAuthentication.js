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
      const saveAuthUser = user => {
        localStorage.setItem('authUser', JSON.stringify(user));
        this.props.onSetAuthUser(user);
      };

      const signinWithGoogle = async ({ uid, displayName }) => {
        const {
          data: { fetchUser },
        } = await this.props.fetchUser.refetch({ uid });
        const user = fetchUser || { uid, displayName };

        // 新規ユーザであればDB登録
        if (!fetchUser) this.props.createUser({ variables: { user } });
        saveAuthUser(user);
      };

      const signupWithEmail = async ({ uid, name, categories }) => {
        const user = { uid, displayName: name, categories };
        saveAuthUser(user);
        await this.props.createUser({ variables: { user } });
      };

      const signinWithEmail = async ({ uid }) => {
        const {
          data: { fetchUser },
        } = await this.props.fetchUser.refetch({ uid });
        saveAuthUser(fetchUser);
      };

      this.listener = this.props.firebase.onAuthUserListener(
        async ({ uid, displayName }) => {
          if (this.props.authUser) return;
          if (uid && displayName) signinWithGoogle({ uid, displayName });
          if (!displayName) {
            const storage = JSON.parse(sessionStorage.getItem('authUser'));
            sessionStorage.removeItem('authUser');
            if (storage && storage.name) {
              signupWithEmail({ ...storage, uid });
            } else {
              signinWithEmail({ uid });
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
