import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import EventCard from '.';

const stories = storiesOf('organisms/EventCard', module);

stories.add('タイトルとリンクのみの場合', () => (
  <EventCard
    title={text('タイトル', 'イベントのタイトル')}
    eventUrl={text('url', 'https://connpass.com/')}
  />
));

stories.add('全項目ある場合', () => (
  <EventCard
    title={text('タイトル', 'イベントのタイトル')}
    eventUrl={text('url', 'https://connpass.com/')}
    catchMessage={text('説明', 'イベントの説明です')}
    place={text('場所', '東京都千代田区丸の内')}
  />
));
