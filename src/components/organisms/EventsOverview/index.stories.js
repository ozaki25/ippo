import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import EventsOverview from '.';

const stories = storiesOf('organisms/EventsOverview', module);

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
    push: action('push'),
    goBack: action('goBack'),
  },
  firebase: {},
};

stories.add('通常パターン', () => <EventsOverview {...props} />);
