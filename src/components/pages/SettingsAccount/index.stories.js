import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SettingsAccount from '.';

const stories = storiesOf('pages/SettingsAccount', module);

const props = ({ loading = false }) => ({
  data: {
    fetchUser: {
      displayName: 'テストユーザ',
      categories: 'test1,test2',
    },
    loading,
    refetch: action('refetch'),
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
  onSetAuthUser: action('onSetAuthUser'),
});

stories.add('通常パターン', () => <SettingsAccount {...props({})} />);

stories.add('ローディング', () => <SettingsAccount {...props({ loading: true })} />);

stories.add('エラー', () => (
  <SettingsAccount
    {...props({})}
    updateUser={() =>
      new Promise((resolve, reject) => reject(new Error('Network error: Failed to fetch')))
    }
  />
));
