import React from 'react';
import { snapshot } from 'test/helpers';
import OrganizedEvents from '.';

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
    organizedEvents: {
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

snapshot('OrganizedEvents/nomal', <OrganizedEvents {...props({})} />);

snapshot('OrganizedEvents/loading', <OrganizedEvents {...props({ loading: true, empty: true })} />);

snapshot('OrganizedEvents/nocontents', <OrganizedEvents {...props({ empty: true })} />);
