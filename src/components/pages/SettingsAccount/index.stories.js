import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SettingsAccount from '.';

const stories = storiesOf('pages/SettingsAccount', module);

const props = {
  data: {
    fetchUser: {
      displayName: '名前',
      categories: ['test1', 'test2'],
    },
    loading: false,
  },
  updateUser: action('updateUser'),
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

stories.add('通常パターン', () => <SettingsAccount {...props} />);
