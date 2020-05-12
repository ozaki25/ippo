import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import NewTweet from '.';

export default {
  title: 'pages/NewTweet',
};

const props = {
  hashtag: text('hashtag', 'test_event'),
  createTweet: action('create'),
  authUser: {
    uid: '123',
    displayName: 'テストユーザ',
  },
  history: {
    push: action('push'),
    goBack: action('goBack'),
    location: {},
  },
  firebase: {},
  parentTweet: {
    tweet: {},
  },
};

const defaultTweetProps = {
  history: {
    push: action('push'),
    goBack: action('goBack'),
    location: {
      search: '?tweet=デフォルト',
    },
  },
};

const joinProps = {
  history: {
    push: action('push'),
    goBack: action('goBack'),
    location: {
      search: '?tweet=参加します！&type=join',
    },
  },
};

const leaveProps = {
  history: {
    push: action('push'),
    goBack: action('goBack'),
    location: {
      search: '?tweet=キャンセルします&type=leave',
    },
  },
};

const parentTweetProps = {
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

export const 通常パターン = () => <NewTweet {...props} />;

export const エラー = () => (
  <NewTweet
    {...props}
    createTweet={() =>
      new Promise((resolve, reject) =>
        reject(new Error('Network error: Failed to fetch')),
      )
    }
  />
);

export const デフォルトツイート = () => (
  <NewTweet {...props} {...defaultTweetProps} />
);

export const 参加 = () => <NewTweet {...props} {...joinProps} />;

export const キャンセル = () => <NewTweet {...props} {...leaveProps} />;

export const 親ツイートあり = () => (
  <NewTweet {...props} {...parentTweetProps} />
);
