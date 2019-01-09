import React from 'react';
import { snapshot } from 'test/helpers';
import InternalEvents from '.';

const event = i => ({
  id: String(i),
  title: `イベントのタイトル${i}`,
  catchMessage: 'イベントの説明です',
  place: '東京都千代田区丸の内',
  startedAt: '2018/12/1 10:30',
});

const internalEvents = [...new Array(10)].map((_, i) => event(i));

const props = ({ loading = false, internalEvents = null }) => ({
  data: {
    loading,
    internalEvents,
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
    doSignOut:jest.fn()
  },
});

snapshot('InternalEvents/nomal', <InternalEvents {...props({ internalEvents })} />);

snapshot('InternalEvents/loading', <InternalEvents {...props({ loading: true })} />);

snapshot('InternalEvents/nocontents', <InternalEvents {...props({})} />);
