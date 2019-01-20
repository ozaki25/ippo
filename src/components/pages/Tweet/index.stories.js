import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import Tweet from '.';

const stories = storiesOf('pages/Tweet', module);

const props = {
  data: {
    loading: boolean('loading', false),
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
    push: action('push'),
    goBack: action('goBack'),
  },
  firebase: {},
};

stories.add('通常パターン', () => <Tweet {...props} />);
