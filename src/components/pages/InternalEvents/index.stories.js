import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import InternalEvents from '.';

const stories = storiesOf('pages/InternalEvents', module);

const event = i => ({
  id: String(i),
  title: `イベントのタイトル${i}`,
  catchMessage: 'イベントの説明です',
  place: '東京都千代田区丸の内',
  startedAt: '2018/12/1 10:30',
});

const internalEvents = [...new Array(10)].map((_, i) => event(i));

const props = ({ loading = false, internalEvents = null }) => ({
  data: {
    loading,
    internalEvents,
  },
  subscribe: action('subscribe'),
});

stories.add('通常パターン', () => <InternalEvents {...props({ internalEvents })} />);

stories.add('ロード中', () => <InternalEvents {...props({ loading: true })} />);

stories.add('データなし', () => <InternalEvents {...props({})} />);
