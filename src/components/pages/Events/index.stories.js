import React from 'react';
import { storiesOf } from '@storybook/react';
import Events from '.';

const stories = storiesOf('pages/Events', module);

const event = i => ({
  event_id: i,
  title: `イベントのタイトル${i}`,
  event_url: 'https://connpass.com/',
  catch: 'イベントの説明です',
  place: '東京都千代田区丸の内',
});

const data = {
  connpass: {
    events: [...new Array(10)].map((_, i) => event(i)),
  },
};

stories.add('通常パターン', () => <Events data={data} />);

stories.add('ロード中', () => <Events data={{ loading: true }} />);
