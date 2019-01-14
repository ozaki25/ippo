import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ExternalEvents from '.';

const stories = storiesOf('pages/ExternalEvents', module);

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

stories.add('通常パターン', () => <ExternalEvents {...props({})} />);

stories.add('ロード中', () => <ExternalEvents {...props({ loading: true, empty: true })} />);

stories.add('データなし', () => <ExternalEvents {...props({ empty: true })} />);
