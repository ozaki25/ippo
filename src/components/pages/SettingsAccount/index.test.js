import React from 'react';
import { snapshot } from 'test/helpers';
import SettingsAccount from '.';

const props = {
  data: {
    fetchUser: {
      displayName: 'テストユーザ',
      categories: 'test1,test2',
    },
    loading: false,
    refetch: jest.fn(),
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
  onSetAuthUser: jest.fn(),
};

snapshot('SettingsAccount/nomal', <SettingsAccount {...props} />);
