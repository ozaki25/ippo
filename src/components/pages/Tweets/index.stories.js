import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import Tweets from '.';

export default {
  title: 'pages/Tweets',
};

const props = fixedTweet => ({
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
      joined: boolean('joined', true),
      event: fixedTweet
        ? {
            hashtag: text('hashtag', 'react_handson'),
            id: text('id', '1546779693296'),
            title: text('title', 'Reactハンズオン'),
            catchMessage: text(
              'catchMessage',
              '初心者向けにReactのハンズオンをやります！',
            ),
            place: text('place', '晴海3階'),
            name: text('name', 'ozaki25'),
            startedAt: text('startedAt', '2018/01/01 12:34'),
            timestamp: text('timestamp', '1546779693296'),
          }
        : null,
    },
    refetch: action('refetch'),
    fetchMore: action('fetchMore'),
    variables: {
      hashtag: 'test',
      limit: 10,
    },
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

export const 固定ツイートなし = () => <Tweets {...props()} />;

export const 固定ツイートあり = () => <Tweets {...props(true)} />;
