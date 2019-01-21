import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import Tweet from '.';

const stories = storiesOf('pages/Tweet', module);

const props = ({ comments }) => ({
  data: {
    loading: boolean('loading', false),
    tweet: {
      id: '1',
      name: 'テストユーザ',
      text: '投稿内容',
      time: '2018/01/01 12:34',
      hashtag: 'test',
      comments,
    },
    refetch: action('refetch'),
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
});

const comments = [
  {
    id: '2',
    name: '他のユーザ',
    text: '投稿内容',
    time: '2018/01/01 12:34',
    hashtag: 'test',
  },
  {
    id: '3',
    name: '別のユーザ',
    text: '投稿内容',
    time: '2018/01/01 12:34',
    hashtag: 'test',
  },
];

stories.add('通常パターン', () => <Tweet {...props({})} />);

stories.add('コメント有り', () => <Tweet {...props({ comments })} />);
