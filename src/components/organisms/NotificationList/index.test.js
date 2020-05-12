import React from 'react';
import { snapshot } from 'src/test/helpers';
import NotificationList from '.';

const props = ({ checked }) => ({
  notifications: [
    {
      id: '123',
      checked,
      title: '通知のタイトルです',
      content: '通知の内容です。通知の本文が表示されます。',
      timestamp: 'Tue Jan 22 2019 00:38:59 GMT+0900 (Japan Standard Time)',
    },
  ],
  history: {
    push: jest.fn(),
    goBack: jest.fn(),
  },
});

snapshot(
  'NotificationList/read',
  <NotificationList {...props({ checked: true })} />,
);

snapshot(
  'NotificationList/unread',
  <NotificationList {...props({ checked: false })} />,
);
