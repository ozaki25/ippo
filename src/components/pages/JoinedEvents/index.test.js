import React from 'react';
import { snapshot } from 'test/helpers';
import JoinedEvents from '.';

const event = i => ({
  id: String(i),
  title: `イベントのタイトル${i}`,
  catchMessage: 'イベントの説明です',
  place: '東京都千代田区丸の内',
  startedAt: '2018/12/1 10:30',
});

const joinedEvents = [...new Array(10)].map((_, i) => event(i));

const props = ({ loading = false, joinedEvents = null }) => ({
  data: {
    loading,
    joinedEvents,
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

snapshot('JoinedEvents/nomal', <JoinedEvents {...props({ joinedEvents })} />);

snapshot('JoinedEvents/loading', <JoinedEvents {...props({ loading: true })} />);

snapshot('JoinedEvents/nocontents', <JoinedEvents {...props({})} />);
