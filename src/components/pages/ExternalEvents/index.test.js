import React from 'react';
import { snapshot } from 'test/helpers';
import ExternalEvents from '.';

const event = i => ({
  id: String(i),
  title: `イベントのタイトル${i}`,
  eventUrl: 'https://connpass.com/',
  catchMessage: 'イベントの説明です',
  place: '東京都千代田区丸の内',
  startedAt: '2012-04-17T18:30:00+09:00',
});

const props = ({ loading = false, empty = false }) => ({
  data: {
    loading,
    externalEvents: {
      items: empty ? [] : [...new Array(10)].map((_, i) => event(i)),
    },
    fetchMore: jest.fn(),
  },
  authUser: {
    uid: '123',
    displayName: 'テストユーザ',
  },
  history: {
    push: jest.fn(),
    goBack: jest.fn(),
  },
  firebase: {
    doSignOut: jest.fn(),
  },
});

snapshot('ExternalEvents/nomal', <ExternalEvents {...props({})} />);

snapshot('ExternalEvents/loading', <ExternalEvents {...props({ loading: true, empty: true })} />);

snapshot('ExternalEvents/nocontents', <ExternalEvents {...props({ empty: true })} />);
