import React from 'react';
import { snapshot } from 'test/helpers';
import SignupFormDialog from '.';

const props = {
  isOpen: true,
  onSubmit: jest.fn(),
  onClose: jest.fn(),
};

snapshot('SignupFormDialog/nomal', <SignupFormDialog {...props} />);
