import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withFirebase } from 'src/context/firebase';
import ROUTES from 'src/constants/routes';

const withAuthorization = Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.onAuthUserListener(
        authUser => !authUser && this.props.history.push(ROUTES.Signin),
        () => this.props.history.push(ROUTES.Signin),
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
