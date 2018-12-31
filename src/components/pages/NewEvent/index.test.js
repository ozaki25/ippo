import React from 'react';
import { snapshot } from 'test/helpers';
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
  },
  firebase: {},
};

snapshot('NewEvent/nomal', <NewEvent {...props} />);
