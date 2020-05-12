import React from 'react';
import { snapshot } from 'src/test/helpers';
import EventCard from '.';

const required = {
  title: 'イベントのタイトル',
  eventUrl: 'https://connpass.com/',
};

const optional = {
  title: 'イベントのタイトル',
  eventUrl: 'https://connpass.com/',
  catchMessage: 'イベントの説明です',
  place: '東京都千代田区丸の内',
  datetime: '2018年12月1日 19:30〜',
};

snapshot('EventCard/minimam', <EventCard {...required} />);

snapshot('EventCard/full', <EventCard {...required} {...optional} />);

snapshot('EventCard/expand', <EventCard {...required} expand />);
