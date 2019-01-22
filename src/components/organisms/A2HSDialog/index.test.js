import React from 'react';
import { snapshot } from 'test/helpers';
import A2HSDialog from '.';

const props = {
  open: true,
  onClose: jest.fn(),
};

snapshot('A2HSDialog/nomal', <A2HSDialog {...props} />);
