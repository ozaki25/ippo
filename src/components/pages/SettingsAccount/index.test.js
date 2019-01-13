import React from 'react';
import { snapshot } from 'test/helpers';
import SettingsAccount from '.';

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

snapshot('SettingsAccount/nomal', <SettingsAccount {...props} />);
