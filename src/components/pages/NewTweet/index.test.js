import React from 'react';
import { snapshot } from 'src/test/helpers';
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
  firebase: {
    doSignOut: jest.fn(),
  },
  parentTweet: {
    tweet: {
      id: '123',
      name: '親',
      text: '親ツイートです',
      time: '2019/1/22',
      hashtag: 'test',
    },
  },
};

snapshot('NewTweet/nomal', <NewTweet {...props} />);
