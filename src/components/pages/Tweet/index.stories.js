import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import Tweet from '.';

export default {
  title: 'pages/Tweet',
};

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
    variables: { hashtag: 'tag' },
    refetch: action('refetch'),
  },
  addLike: action('add like'),
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

export const 通常パターン = () => <Tweet {...props({})} />;

export const コメント有り = () => <Tweet {...props({ comments })} />;
