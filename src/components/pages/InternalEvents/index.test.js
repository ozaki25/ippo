import React from 'react';
import { snapshot } from 'src/test/helpers';
import InternalEvents from '.';

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
    internalEvents: {
      items: empty ? [] : events,
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

snapshot('InternalEvents/nomal', <InternalEvents {...props({})} />);

snapshot(
  'InternalEvents/loading',
  <InternalEvents {...props({ loading: true, empty: true })} />,
);

snapshot(
  'InternalEvents/nocontents',
  <InternalEvents {...props({ empty: true })} />,
);
