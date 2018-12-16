import React from 'react';
import { snapshot } from 'test/helpers';
import FloatingButton from '.';

const props = {
  icon: 'notifications',
  onClick: jest.fn(),
};

snapshot('FloatingButton/nomal', <FloatingButton {...props} />);
