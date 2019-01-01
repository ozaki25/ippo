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
  },
  firebase: {},
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
