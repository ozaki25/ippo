import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Notification from '.';

const stories = storiesOf('pages/Notification', module);

const props = {
  user: {
    fetchUser: {
      notifications: [
        {
          id: '1',
          checked: false,
          title: text('title', '通知のタイトル'),
          content: text('content', '通知の本文です。ここに通知の内容が表示されます。'),
          timestamp: 'Tue Jan 22 2019 00:38:59 GMT+0900 (Japan Standard Time)',
        },
      ],
    },
    refetch: action('refetch'),
    variables: {
      uid: '123',
    },
  },
  match: {
    params: {
      id: '1',
    },
  },
  authUser: {
    uid: '123',
    displayName: 'テストユーザ',
  },
  history: {
    push: action('push'),
    goBack: action('goBack'),
    replace: action('replace'),
  },
  firebase: {},
  readNotification: action('read'),
};

stories.add('通常パターン', () => <Notification {...props} />);
