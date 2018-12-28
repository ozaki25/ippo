import React from 'react';
import { snapshot } from 'test/helpers';
import EventCardList from '.';

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

snapshot('EventCardList/nomal', <EventCardList {...props} />);

snapshot('EventCardList/empty', <EventCardList events={[]} />);
