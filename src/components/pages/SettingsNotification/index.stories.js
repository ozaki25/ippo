import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SettingsNotification from '.';

const stories = storiesOf('pages/SettingsNotification', module);

const props = ({ granted, supported }) => ({
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
  notifications: {
    isGranted: () => granted,
    isSupported: () => supported,
  },
});

stories.add('通知未対応端末', () => (
  <SettingsNotification {...props({ granted: false, supported: false })} />
));

stories.add('通知対応端末で未許可', () => (
  <SettingsNotification {...props({ granted: false, supported: true })} />
));

stories.add('通知対応端末で許可済み', () => (
  <SettingsNotification {...props({ granted: true, supported: true })} />
));
