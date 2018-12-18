import React from 'react';
import { storiesOf } from '@storybook/react';
import EventCardList from '.';

const stories = storiesOf('organisms/EventCardList', module);

const event = {
  title: 'タイトル',
  eventUrl: 'https://connpass.com/',
  catchMessage: 'イベントの説明です',
  place: '東京都千代田区丸の内',
  startedAt: '2018/12/1 19:30',
  interactive: true,
};

const props = {
  events: [...[...Array(5)].map(() => event)],
};

stories.add('通常パターン', () => <EventCardList {...props} />);
