import React from 'react';
import { action } from '@storybook/addon-actions';
import Admin from '.';

export default {
  title: 'pages/Admin',
};

const props = {
  publishNotification: action('publish'),
  registerNotification: action('register'),
  excuteUpdateExternalEvents: action('excuteUpdateExternalEvents'),
  authUser: {
    uid: '123',
    displayName: 'テストユーザ',
  },
  history: {
    push: action('push'),
    goBack: action('goBack'),
  },
  firebase: {
    askForPermissionToReceiveNotifications: action(
      'askForPermissionToReceiveNotifications',
    ),
  },
};

export const 通常パターン = () => <Admin {...props} />;
