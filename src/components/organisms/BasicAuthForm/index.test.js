import React from 'react';
import { snapshot } from 'test/helpers';
import BasicAuthForm from '.';

const props = {
  onSubmit: jest.fn(),
  buttonText: 'ボタン',
};

snapshot('BasicAuthForm/nomal', <BasicAuthForm {...props} />);
