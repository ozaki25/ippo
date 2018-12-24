import React from 'react';
import { snapshot } from 'test/helpers';
import SigninForm from '.';

const props = {
  onSubmit: jest.fn(),
};

snapshot('SigninForm/nomal', <SigninForm {...props} />);
