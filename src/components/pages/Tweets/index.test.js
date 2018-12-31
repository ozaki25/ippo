import React from 'react';
import { snapshot } from 'test/helpers';
import Tweets from '.';

const props = {
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

// TODO
test('test', () => expect(true).toBe(true));
