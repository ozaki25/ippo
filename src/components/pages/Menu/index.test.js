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
  id: String(i),
  title: `タイトル${i}`,
  eventUrl: 'https://connpass.com/',
  catchMessage: '説明です',
  place: '晴海',
  startedAt: '2018/12/1 9:30',
});

const props = {
  createEvent: jest.fn(),
  data: {
    loading: false,
    allEvents: {
      joined: [...[...Array(10)].map((_, i) => internalEvent(i))],
      organized: [...[...Array(10)].map((_, i) => internalEvent(i))],
      recommended: [...[...Array(10)].map((_, i) => internalEvent(i))],
      internal: [...[...Array(10)].map((_, i) => internalEvent(i))],
      external: [...[...Array(10)].map((_, i) => externalEvent(i))],
    },
  },
  authUser: {
    uid: '123',
    displayName: 'テストユーザ',
  },
  history: {
    push: jest.fn(),
    goBack: jest.fn(),
    replace: jest.fn(),
  },
  firebase: {
    doSignOut: jest.fn(),
  },
};

snapshot('Menu/nomal', <Menu {...props} />);
