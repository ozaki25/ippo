import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Admin from '.';

const stories = storiesOf('pages/Admin', module);

const props = {
  publishNotification: action('publish'),
  registerNotification: action('register'),
  authUser: {
    uid: '123',
    displayName: 'テストユーザ',
  },
  history: {
    push: action('push'),
    goBack: action('goBack'),
  },
  firebase: {
    askForPermissionToReceiveNotifications: action('askForPermissionToReceiveNotifications'),
  },
};

stories.add('通常パターン', () => <Admin {...props} />);
