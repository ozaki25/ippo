import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import JoinedEvents from '.';

const stories = storiesOf('pages/JoinedEvents', module);

const event = i => ({
  id: String(i),
  title: `イベントのタイトル${i}`,
  catchMessage: 'イベントの説明です',
  place: '東京都千代田区丸の内',
  startedAt: '2018/12/1 10:30',
});

const joinedEvents = [...new Array(10)].map((_, i) => event(i));

const props = ({ loading = false, joinedEvents = null }) => ({
  data: {
    loading,
    joinedEvents,
  },
  authUser: {
    uid: '123',
    displayName: 'テストユーザ',
  },
  history: {
    push: action('push'),
    goBack: action('goBack'),
  },
  firebase: {},
});

stories.add('通常パターン', () => <JoinedEvents {...props({ joinedEvents })} />);

stories.add('ロード中', () => <JoinedEvents {...props({ loading: true })} />);

stories.add('データなし', () => <JoinedEvents {...props({})} />);
