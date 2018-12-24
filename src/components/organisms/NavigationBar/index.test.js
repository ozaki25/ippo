import React from 'react';
import { snapshot } from 'test/helpers';
import NavigationBar from '.';

const props = {
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
