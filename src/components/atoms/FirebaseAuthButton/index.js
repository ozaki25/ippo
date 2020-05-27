import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import propTypes from 'prop-types';

function FirebaseAuthButton({ firebase, uiShown }) {
  const uiConfig = {
    signInFlow: 'redirect',
    signInSuccessUrl: '/',
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      uiShown,
    },
  };
  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  );
}

FirebaseAuthButton.propTypes = {
  firebase: propTypes.shape({
    auth: propTypes.func.isRequired,
  }),
  callbacks: propTypes.shape({
    uiShown: propTypes.func,
  }),
};

FirebaseAuthButton.defaultProps = {
  callbacks: {
    uiShown: () => {},
  },
};

export default FirebaseAuthButton;
