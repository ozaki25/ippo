import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import NewTweet from '.';

const stories = storiesOf('pages/NewTweet', module);

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

stories.add('通常パターン', () => <NewTweet {...props} />);

stories.add('エラー', () => (
  <NewTweet
    {...props}
    createTweet={() =>
      new Promise((resolve, reject) => reject(new Error('Network error: Failed to fetch')))
    }
  />
));

stories.add('デフォルトツイート', () => <NewTweet {...props} {...defaultTweetProps} />);

stories.add('参加', () => <NewTweet {...props} {...joinProps} />);

stories.add('キャンセル', () => <NewTweet {...props} {...leaveProps} />);

stories.add('親ツイートあり', () => <NewTweet {...props} {...parentTweetProps} />);
