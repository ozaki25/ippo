import React from 'react';
import { snapshot } from 'src/test/helpers';
import SettingsNotification from '.';

const props = {
  authUser: {
    uid: '123',
    displayName: 'テストユーザ',
  },
  history: {
    push: jest.fn(),
    goBack: jest.fn(),
    replace: jest.fn(),
  },
  firebase: { askForPermissionToReceiveNotifications: jest.fn() },
  notifications: {
    isGranted: () => jest.fn(),
    isDenied: () => jest.fn(),
    isSupported: () => jest.fn(),
  },
  registerNotification: jest.fn(),
  unregisterNotification: jest.fn(),
};

snapshot('SettingsNotification/nomal', <SettingsNotification {...props} />);
