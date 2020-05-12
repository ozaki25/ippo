import React from 'react';
import { action } from '@storybook/addon-actions';
import RecommendedEvents from '.';

export default {
  title: 'pages/RecommendedEvents',
};

const event = i => ({
  id: String(i),
  title: `イベントのタイトル${i}`,
  catchMessage: 'イベントの説明です',
  place: '東京都千代田区丸の内',
  startedAt: '2018/12/1 10:30',
});

const events = [...new Array(10)].map((_, i) => event(i));

const props = ({ loading = false, empty = false }) => ({
  data: {
    loading,
    recommendedEvents: {
      items: empty ? [] : events,
    },
    fetchMore: action('fetchMore'),
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

export const 通常パターン = () => <RecommendedEvents {...props({})} />;

export const ロード中 = () => (
  <RecommendedEvents {...props({ loading: true, empty: true })} />
);

export const データなし = () => (
  <RecommendedEvents {...props({ empty: true })} />
);
