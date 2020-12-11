import React from 'react';
import { snapshot } from 'src/test/helpers';
import Admin from '.';

const props = {
  publishNotification: jest.fn(),
  registerNotification: jest.fn(),
  excuteUpdateExternalEvents: jest.fn(),
  authUser: {
    uid: '123',
    displayName: 'テストユーザ',
  },
  history: {
    push: jest.fn(),
    goBack: jest.fn(),
  },
  firebase: {
    askForPermissionToReceiveNotifications: jest.fn(),
  },
};

snapshot('Admin/nomal', <Admin {...props} />);
