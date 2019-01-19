import React from 'react';
import { snapshot } from 'test/helpers';
import Tweet from '.';

const props = {
  data: {
    loading: false,
    tweet: {
      id: '1',
      name: 'テストユーザ',
      text: '投稿内容',
      time: '2018/01/01 12:34',
      hashtag: 'test',
    },
  },
  authUser: {
    uid: '123',
    displayName: 'テストユーザ',
  },
  history: {
    push: jest.fn(),
    goBack: jest.fn(),
  },
  firebase: {
    doSignOut:jest.fn()
  },
};

snapshot('Tweet/nomal', <Tweet {...props} />);
