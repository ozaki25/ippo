import React from 'react';
import { action } from '@storybook/addon-actions';
import EventsOverview from '.';

export default {
  title: 'organisms/EventsOverview',
};

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
  joined: [...[...Array(5)].map((_, i) => internalEvent(i))],
  organized: [...[...Array(5)].map((_, i) => internalEvent(i))],
  recommended: [...[...Array(5)].map((_, i) => internalEvent(i))],
  internal: [...[...Array(5)].map((_, i) => internalEvent(i))],
  external: [...[...Array(5)].map((_, i) => externalEvent(i))],
  history: {
    push: action('push'),
    goBack: action('goBack'),
  },
  firebase: {},
};

export const 通常パターン = () => <EventsOverview {...props} />;
