import React from 'react';
import { action } from '@storybook/addon-actions';
import SettingsNotification from '.';

export default {
  title: 'pages/SettingsNotification',
};

const props = ({ granted, denied, supported }) => ({
  authUser: {
    uid: '123',
    displayName: 'テストユーザ',
  },
  history: {
    push: action('push'),
    goBack: action('goBack'),
    replace: action('replace'),
  },
  firebase: {
    askForPermissionToReceiveNotifications: action(
      'askForPermissionToReceiveNotifications',
    ),
  },
  notifications: {
    isGranted: () => granted,
    isDenied: () => denied,
    isSupported: () => supported,
  },
  registerNotification: action('register'),
  unregisterNotification: action('unregister'),
});

export const 通知未対応端末 = () => (
  <SettingsNotification
    {...props({ granted: false, denied: false, supported: false })}
  />
);

export const 通知対応端末で未設定 = () => (
  <SettingsNotification
    {...props({ granted: false, denied: false, supported: true })}
  />
);

export const 通知対応端末で許可済み = () => (
  <SettingsNotification
    {...props({ granted: true, denied: false, supported: true })}
  />
);

export const 通知対応端末で拒否済み = () => (
  <SettingsNotification
    {...props({ granted: false, denied: true, supported: true })}
  />
);
