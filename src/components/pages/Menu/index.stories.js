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
  createEvent: action('createEvent'),
  data: {
    loading,
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
    push: action('push'),
    goBack: action('goBack'),
    replace: action('replace'),
  },
  firebase: {},
});

stories.add('通常パターン', () => <Menu {...props({})} />);

stories.add('ロード中', () => <Menu {...props({ loading: true })} />);
