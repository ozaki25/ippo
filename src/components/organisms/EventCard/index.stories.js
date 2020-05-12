import React from 'react';
import { text } from '@storybook/addon-knobs';
import EventCard from '.';

export default {
  title: 'organisms/EventCard',
};

export const タイトルとリンクのみの場合 = () => (
  <EventCard
    title={text('タイトル', 'イベントのタイトル')}
    eventUrl={text('url', 'https://connpass.com/')}
  />
);

export const 全項目ある場合 = () => (
  <EventCard
    title={text('タイトル', 'イベントのタイトル')}
    eventUrl={text('url', 'https://connpass.com/')}
    catchMessage={text('説明', 'イベントの説明です')}
    place={text('場所', '東京都千代田区丸の内')}
    datetime={text('日時', '2018年12月1日 19:30〜')}
  />
);

export const サイズを拡張する場合 = () => (
  <EventCard
    title={text('タイトル', 'イベントのタイトル')}
    eventUrl={text('url', 'https://connpass.com/')}
    expand
  />
);

export const 一行でおさめる場合 = () => (
  <EventCard
    title={text(
      'タイトル',
      'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん',
    )}
    eventUrl={text('url', 'https://connpass.com/')}
    catchMessage={text(
      '説明',
      'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん',
    )}
    place={text(
      '場所',
      'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん',
    )}
    datetime={text(
      '日時',
      'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん',
    )}
    noWrap
  />
);
