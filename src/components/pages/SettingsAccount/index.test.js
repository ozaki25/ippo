import React from 'react';
import { snapshot } from 'test/helpers';
import SettingsAccount from '.';

const props = {
  data: {
    fetchUser: {
      displayName: '名前',
      categories: ['test1', 'test2'],
    },
    loading: false,
  },
  updateUser: jest.fn(),
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
