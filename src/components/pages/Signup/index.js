import React from 'react';
import {} from '@material-ui/core';
import styled from 'styled-components';
import propTypes from 'prop-types';
import ROUTES from 'src/constants/routes';

class Signup extends React.Component {
  signup = async ({ data: { email, pass, name } }) => {
    sessionStorage.setItem('authUser', JSON.stringify({ name }));
    await this.props.firebase.doCreateUserWithEmailAndPassword(email, pass);
    this.props.history.push(ROUTES.Menu);
  };

  render() {
    return <p>...</p>;
  }
}

Signup.displayName = 'Signup';

Signup.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
  firebase: propTypes.shape({
    doSignInWithEmailAndPassword: propTypes.func.isRequired,
  }).isRequired,
};

Signup.defaultProps = {};

export default Signup;
