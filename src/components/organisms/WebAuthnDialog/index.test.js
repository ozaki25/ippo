import React from 'react';
import { snapshot } from 'test/helpers';
import WebAuthnDialog from '.';

const props = {
  open: true,
  onClose: jest.fn(),
};

snapshot('WebAuthnDialog/nomal', <WebAuthnDialog {...props} />);
