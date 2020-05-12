import React from 'react';
import { action } from '@storybook/addon-actions';
import Signin from '.';

export default {
  title: 'pages/Signin',
};

const props = {
  history: {
    push: action('push'),
    replace: action('replace'),
    goBack: action('goBack'),
  },
  firebase: {
    auth: {
      getRedirectResult: action('getRedirectResult'),
    },
    doSignInWithEmailAndPassword: action('signin'),
    doSignInWithGoogle: action('sigin with google'),
    doSignOut: action('signout'),
  },
};

export const 通常パターン = () => <Signin {...props} />;
