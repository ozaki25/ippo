import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import NotificationList from '.';

const stories = storiesOf('organisms/NotificationList', module);

const props = ({ checked }) => ({
  notifications: [
    {
      id: text('id', '123'),
      checked,
      title: text('title', '通知のタイトルです'),
      content: text('content', '通知の内容です。通知の本文が表示されます。'),
      timestamp: 'Tue Jan 22 2019 00:38:59 GMT+0900 (Japan Standard Time)',
    },
  ],
  history: {
    push: action('push'),
    goBack: action('goBack'),
  },
});

stories.add('既読', () => <NotificationList {...props({ checked: true })} />);

stories.add('未読', () => <NotificationList {...props({ checked: false })} />);
