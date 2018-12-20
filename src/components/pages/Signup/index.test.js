import React from 'react';
import { snapshot } from 'test/helpers';
import Signup from '.';

const props = {
  history: {
    push: jest.fn(),
  },
  firebase: {
    doCreateUserWithEmailAndPassword: jest.fn(),
  },
};

snapshot('Signup/nomal', <Signup {...props} />);