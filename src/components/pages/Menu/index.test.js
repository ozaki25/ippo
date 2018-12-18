import React from 'react';
import { snapshot } from 'test/helpers';
import Menu from '.';

const internalEvent = i => ({
  id: `ID${i}`,
  title: `タイトル${i}`,
  eventUrl: 'https://connpass.com/',
  catchMessage: '説明です',
  place: '晴海',
  startedAt: '2018/12/1 9:30',
});

const externalEvent = i => ({
  event_id: i,
  title: `タイトル${i}`,
  event_url: 'https://connpass.com/',
  catch: '説明です',
  place: '晴海',
  started_at: '2018/12/1 9:30',
});

const props = {
  internal: {
    loading: false,
    internalEvents: [...[...Array(5)].map((_, i) => internalEvent(i))],
  },
  external: {
    loading: false,
    connpass: {
      events: [...[...Array(5)].map((_, i) => externalEvent(i))],
    },
  },
};

snapshot('Menu/nomal', <Menu {...props} />);
