import React from 'react';
import { snapshot } from 'test/helpers';
import Publish from '.';

const props = {
  publishNotification: jest.fn(),
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

snapshot('Publish/nomal', <Publish {...props} />);
