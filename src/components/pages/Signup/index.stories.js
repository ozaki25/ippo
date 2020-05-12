import React from 'react';
import { action } from '@storybook/addon-actions';
import Signup from '.';

export default {
  title: 'pages/Signup',
};

const props = {
  history: {
    push: action('push'),
    replace: action('replace'),
    goBack: action('goBack'),
  },
  firebase: {
    doSignInWithEmailAndPassword: action('signin', 'signin'),
  },
};

export const 通常パターン = () => <Signup {...props} />;
