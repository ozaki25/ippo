import React from 'react';
import { snapshot } from 'test/helpers';
import SignupForm from '.';

const props = {
  onSubmit: jest.fn(),
};

snapshot('SignupForm/nomal', <SignupForm {...props} />);
