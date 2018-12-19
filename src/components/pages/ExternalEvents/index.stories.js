import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ExternalEvents from '.';

const stories = storiesOf('pages/ExternalEvents', module);

const event = i => ({
  event_id: i,
  title: `イベントのタイトル${i}`,
  event_url: 'https://connpass.com/',
  catch: 'イベントの説明です',
  place: '東京都千代田区丸の内',
  started_at: '2012-04-17T18:30:00+09:00',
});

const connpass = {
  events: [...new Array(10)].map((_, i) => event(i)),
  results_available: 100,
  results_start: 11,
};

const props = ({ loading = false, connpass = null }) => ({
  data: {
    loading,
    connpass,
    refetch: action('refetch'),
  },
});

stories.add('通常パターン', () => <ExternalEvents {...props({ connpass })} />);

stories.add('ロード中', () => <ExternalEvents {...props({ loading: true })} />);

stories.add('データなし', () => <ExternalEvents {...props({})} />);
