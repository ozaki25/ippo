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
  event_id: i,
  title: `タイトル${i}`,
  event_url: 'https://connpass.com/',
  catch: '説明です',
  place: '晴海',
  started_at: '2018/12/1 9:30',
});

const props = {
  createEvent: action('createEvent'),
  internal: {
    loading: false,
    internalEvents: [...[...Array(10)].map((_, i) => internalEvent(i))],
  },
  external: {
    loading: false,
    connpass: {
      events: [...[...Array(10)].map((_, i) => externalEvent(i))],
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
};

stories.add('通常パターン', () => <Menu {...props} />);
