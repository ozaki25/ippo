import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SettingsNotification from '.';

const stories = storiesOf('pages/SettingsNotification', module);

const props = {
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
};

stories.add('通常パターン', () => <SettingsNotification {...props} />);
