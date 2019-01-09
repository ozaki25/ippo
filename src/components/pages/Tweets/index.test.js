import React from 'react';
import { snapshot } from 'test/helpers';
import Tweets from '.';

const props = {
  data: {
    loading: false,
    tweets: {
      tweetList: [
        {
          id: '1',
          name: 'テストユーザ',
          text: '投稿内容',
          time: '2018/01/01 12:34',
          hashtag: 'test',
        },
      ],
      startId: null,
      joined: true,
    },
    refetch: jest.fn(),
    fetchMore: jest.fn(),
    variables: {
      hashtag: 'test',
      limit: 10,
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

snapshot('Tweets/nomal', <Tweets {...props} />);
