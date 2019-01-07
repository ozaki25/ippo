import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import Tweets from '.';

const stories = storiesOf('pages/Tweets', module);

const props = {
  data: {
    loading: boolean('loading', false),
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
    },
    refetch: action('refetch'),
    fetchMore: action('fetchMore'),
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
    push: action('push'),
    goBack: action('goBack'),
  },
  firebase: {},
};

stories.add('通常パターン', () => <Tweets {...props} />);
