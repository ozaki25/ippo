import React from 'react';
import { snapshot } from 'src/test/helpers';
import Signup from '.';

const props = {
  history: {
    push: jest.fn(),
    replace: jest.fn(),
  },
  firebase: {
    doSignInWithEmailAndPassword: jest.fn(),
  },
};

snapshot('Signup/nomal', <Signup {...props} />);
