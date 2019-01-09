import React from 'react';
import { snapshot } from 'test/helpers';
import NotificationList from '.';

const props = {
  history: {
    push: jest.fn(),
    goBack: jest.fn(),
  },
};

snapshot('NotificationList/nomal', <NotificationList {...props} />);
