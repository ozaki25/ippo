import React from 'react';
import { snapshot } from 'test/helpers';
import Notification from '.';

const props = {
  publishNotification: jest.fn(),
  registerNotification: jest.fn(),
};

snapshot('Notification/nomal', <Notification {...props} />);
