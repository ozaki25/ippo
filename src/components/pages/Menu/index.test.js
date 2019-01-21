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
  data: {
    loading: false,
    allEvents: {
      joined: [...[...Array(10)].map((_, i) => internalEvent(i))],
      organized: [...[...Array(10)].map((_, i) => internalEvent(i))],
      recommended: [...[...Array(10)].map((_, i) => internalEvent(i))],
      internal: [...[...Array(10)].map((_, i) => internalEvent(i))],
      external: [...[...Array(10)].map((_, i) => externalEvent(i))],
    },
    refetch: jest.fn(),
  },
  user: {
    fetchUser: {
      uid: '123',
      displayName: 'テストユーザ',
      categories: 'test,test2',
      notifications: [
        {
          id: '1',
          title: '通知のタイトル',
          content: '通知の内容',
          checked: false,
        },
      ],
    },
  },
  createEvent: jest.fn(),
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

snapshot('Menu/home', <Menu {...props} />);

snapshot('Menu/newEvent', <Menu {...props} tab="イベント作成" />);

snapshot('Menu/notifications', <Menu {...props} tab="通知" />);
