import React from 'react';
import { snapshot } from 'test/helpers';
import NewTweet from '.';

const props = {
  hashtag: 'test_event',
  createTweet: jest.fn(),
  authUser: {
    uid: '123',
    displayName: 'テストユーザ',
  },
  history: {
    push: jest.fn(),
    goBack: jest.fn(),
    location: {},
  },
  firebase: {},
};

snapshot('NewTweet/nomal', <NewTweet {...props} />);
