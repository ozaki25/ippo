import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withFirebase } from 'context/firebase';
import ROUTES from 'constants/routes';

const withAuthorization = Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.onAuthUserListener(
        authUser => !authUser && this.props.history.push(ROUTES.Signin),
        () => {
          if (!this.props.authUser) this.props.history.push(ROUTES.Signin);
        },
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return this.props.authUser ? <Component {...this.props} /> : null;
    }
  }

  const mapStateToProps = state => ({
    authUser: state.session.authUser,
  });

  return compose(
    withRouter,
    withFirebase,
    connect(mapStateToProps),
  )(WithAuthorization);
};

export default withAuthorization;
