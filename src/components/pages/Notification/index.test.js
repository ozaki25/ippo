import React from 'react';
import { snapshot } from 'src/test/helpers';
import Notification from '.';

const props = {
  user: {
    fetchUser: {
      notifications: [
        {
          id: '1',
          checked: false,
          title: '通知のタイトル',
          content: '通知の本文',
          timestamp: 'Tue Jan 22 2019 00:38:59 GMT+0900 (Japan Standard Time)',
        },
      ],
    },
    refetch: jest.fn(),
    variables: {
      uid: '123',
    },
  },
  match: {
    params: {
      id: '1',
    },
  },
  readNotification: jest.fn(),
  authUser: {
    uid: '123',
    displayName: 'テストユーザ',
  },
  history: {
    push: jest.fn(),
    goBack: jest.fn(),
    replace: jest.fn(),
  },
  firebase: { askForPermissionToReceiveNotifications: jest.fn() },
};

snapshot('Notification/nomal', <Notification {...props} />);
