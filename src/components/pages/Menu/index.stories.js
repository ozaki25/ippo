import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Menu from '.';

const stories = storiesOf('pages/Menu', module);

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

const props = ({ loading = false }) => ({
  data: {
    loading,
    allEvents: {
      joined: [...[...Array(10)].map((_, i) => internalEvent(i))],
      organized: [...[...Array(10)].map((_, i) => internalEvent(i))],
      recommended: [...[...Array(10)].map((_, i) => internalEvent(i))],
      internal: [...[...Array(10)].map((_, i) => internalEvent(i))],
      external: [...[...Array(10)].map((_, i) => externalEvent(i))],
    },
    refetch: action('refetch'),
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
    refetch: action('refetch'),
  },
  createEvent: action('createEvent'),
  authUser: {
    uid: '123',
    displayName: 'テストユーザ',
  },
  history: {
    push: action('push'),
    goBack: action('goBack'),
    replace: action('replace'),
  },
  firebase: {},
});

stories.add('ホーム', () => <Menu {...props({})} />);

stories.add('イベント作成', () => <Menu {...props({})} tab="イベント作成" />);

stories.add('通知一覧', () => <Menu {...props({})} tab="通知" />);

stories.add('ロード中', () => <Menu {...props({ loading: true })} />);
