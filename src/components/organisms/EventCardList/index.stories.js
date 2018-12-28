import React from 'react';
import { storiesOf } from '@storybook/react';
import EventCardList from '.';

const stories = storiesOf('organisms/EventCardList', module);

const event = i => ({
  id: String(i),
  title: 'タイトル',
  eventUrl: 'https://connpass.com/',
  catchMessage: 'イベントの説明です',
  place: '東京都千代田区丸の内',
  startedAt: '2018/12/1 19:30',
});

const props = {
  events: [...[...Array(5)].map((_, i) => event(i))],
};

stories.add('通常パターン', () => <EventCardList {...props} />);

stories.add('0件の場合', () => <EventCardList events={[]} />);

