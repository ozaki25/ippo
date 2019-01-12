import React from 'react';
import { snapshot } from 'test/helpers';
import NavigationBar from '.';

const props = {
  title: 'タイトル',
  history: {
    push: jest.fn(),
    replace: jest.fn(),
    goBack: jest.fn(),
  },
  firebase: {
    doSignOut: jest.fn(),
  },
};

const authUser = {
  uid: 'abc',
  displayName: 'テストユーザ',
};

snapshot('NavigationBar/nologin', <NavigationBar {...props} />);

snapshot('NavigationBar/login', <NavigationBar {...props} authUser={authUser} />);

snapshot('NavigationBar/back', <NavigationBar {...props} back />);

snapshot('NavigationBar/all', <NavigationBar {...props} back authUser={authUser} />);
