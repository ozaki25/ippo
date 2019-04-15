import React from 'react';
import { snapshot } from 'test/helpers';
import Signin from '.';

const props = {
  history: {
    push: jest.fn(),
    replace: jest.fn(),
  },
  firebase: {
    auth: {
      getRedirectResult: jest.fn(),
    },
    doSignInWithEmailAndPassword: jest.fn(),
    doSignInWithGoogle: jest.fn(),
    doSignOut: jest.fn(),
  },
};

snapshot('Signin/nomal', <Signin {...props} />);