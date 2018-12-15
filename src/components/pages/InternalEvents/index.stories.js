import React from 'react';
import { storiesOf } from '@storybook/react';
import InternalEvents from '.';

const stories = storiesOf('pages/InternalEvents', module);

const event = i => ({
  id: i,
  title: `イベントのタイトル${i}`,
  catchMessage: 'イベントの説明です',
  place: '東京都千代田区丸の内',
  startedAt: '2018/12/1 10:30',
});

const data = {
  events: [...new Array(10)].map((_, i) => event(i)),
};

stories.add('通常パターン', () => <InternalEvents data={{ ...data, loading: false }} />);

stories.add('ロード中', () => <InternalEvents data={{ loading: true }} />);

stories.add('データなし', () => <InternalEvents data={{ events: null, loading: false }} />);
