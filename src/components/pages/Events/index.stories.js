import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Events from '.';

const stories = storiesOf('pages/Events', module);

const event = i => ({
  event_id: i,
  title: `イベントのタイトル${i}`,
  event_url: 'https://connpass.com/',
  catch: 'イベントの説明です',
  place: '東京都千代田区丸の内',
  started_at: '2012-04-17T18:30:00+09:00',
});

const data = {
  connpass: {
    events: [...new Array(10)].map((_, i) => event(i)),
  },
};

stories.add('通常パターン', () => (
  <Events data={data} registerNotification={action('registerNotification')} />
));

stories.add('ロード中', () => (
  <Events data={{ loading: true }} registerNotification={action('registerNotification')} />
));

stories.add('データなし', () => (
  <Events data={{ events: null }} registerNotification={action('registerNotification')} />
));
