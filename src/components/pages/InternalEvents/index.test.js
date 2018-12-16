import React from 'react';
import { snapshot } from 'test/helpers';
import InternalEvents from '.';

const event = i => ({
  id: i,
  title: `イベントのタイトル${i}`,
  catchMessage: 'イベントの説明です',
  place: '東京都千代田区丸の内',
  startedAt: '2018/12/1 10:30',
});

const events = {
  events: [...new Array(10)].map((_, i) => event(i)),
};

const props = ({ loading = false, events = null }) => ({
  data: {
    loading,
    events,
  },
  registerNotification: jest.fn(),
});

snapshot('InternalEvents/nomal', <InternalEvents {...props({ events })} />);

snapshot('InternalEvents/loading', <InternalEvents {...props({ loading: true })} />);

snapshot('InternalEvents/nocontents', <InternalEvents {...props({})} />);
