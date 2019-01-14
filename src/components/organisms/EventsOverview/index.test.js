import React from 'react';
import { snapshot } from 'test/helpers';
import EventsOverview from '.';

const internalEvent = i => ({
  id: `ID${i}`,
  title: `タイトル${i}`,
  eventUrl: 'https://connpass.com/',
  catchMessage: '説明です',
  place: '晴海',
  startedAt: '2018/12/1 9:30',
});

const externalEvent = i => ({
  id: String(i),
  title: `タイトル${i}`,
  eventUrl: 'https://connpass.com/',
  catchMessage: '説明です',
  place: '晴海',
  startedAt: '2018/12/1 9:30',
});

const props = {
  joined: {
    loading: false,
    joinedEvents: {
      items: [...[...Array(5)].map((_, i) => internalEvent(i))],
    },
  },
  organized: {
    loading: false,
    organizedEvents: {
      items: [...[...Array(5)].map((_, i) => internalEvent(i))],
    },
  },
  internal: {
    loading: false,
    internalEvents: {
      items: [...[...Array(5)].map((_, i) => internalEvent(i))],
    },
  },
  external: {
    loading: false,
    externalEvents: {
      items: [...[...Array(5)].map((_, i) => externalEvent(i))],
    },
  },
  history: {
    push: jest.fn(),
    goBack: jest.fn(),
  },
};

snapshot('EventsOverview/nomal', <EventsOverview {...props} />);
