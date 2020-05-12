import React from 'react';
import { action } from '@storybook/addon-actions';
import ExternalEvents from '.';

export default {
  title: 'pages/ExternalEvents',
};

const event = i => ({
  id: String(i),
  title: `イベントのタイトル${i}`,
  eventUrl: 'https://connpass.com/',
  catch: 'イベントの説明です',
  place: '東京都千代田区丸の内',
  startedAt: '2012-04-17T18:30:00+09:00',
});

const props = ({ loading = false, empty = false }) => ({
  data: {
    loading,
    externalEvents: {
      items: empty ? [] : [...new Array(10)].map((_, i) => event(i)),
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

export const 通常パターン = () => <ExternalEvents {...props({})} />;

export const ロード中 = () => (
  <ExternalEvents {...props({ loading: true, empty: true })} />
);

export const データなし = () => <ExternalEvents {...props({ empty: true })} />;
