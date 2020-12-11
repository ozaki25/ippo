import React from 'react';
import { snapshot } from 'src/test/helpers';
import NewEvent from '.';

const props = {
  createEvent: jest.fn(),
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

snapshot('NewEvent/nomal', <NewEvent {...props} />);
