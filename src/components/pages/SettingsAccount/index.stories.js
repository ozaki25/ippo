import React from 'react';
import { action } from '@storybook/addon-actions';
import SettingsAccount from '.';

export default {
  title: 'pages/SettingsAccount',
};

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

export const 通常パターン = () => <SettingsAccount {...props({})} />;

export const ローディング = () => (
  <SettingsAccount {...props({ loading: true })} />
);

export const エラー = () => (
  <SettingsAccount
    {...props({})}
    updateUser={() =>
      new Promise((resolve, reject) =>
        reject(new Error('Network error: Failed to fetch')),
      )
    }
  />
);
