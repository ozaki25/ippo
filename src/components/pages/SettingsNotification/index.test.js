import React from 'react';
import { snapshot } from 'test/helpers';
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
  firebase: {},
};

snapshot('SettingsNotification/nomal', <SettingsNotification {...props} />);
