import React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import NavigationBar from '.';

export default {
  title: 'organisms/NavigationBar',
};

const props = {
  title: text('title', 'タイトル'),
  history: {
    push: action('push'),
    replace: action('replace'),
    goBack: action('back'),
  },
  firebase: {
    doSignOut: action('signout'),
  },
};

const authUser = {
  uid: 'abc',
  displayName: text('name', 'テストユーザ'),
};

export const ログイン未済 = () => <NavigationBar {...props} />;

export const ログイン済み = () => (
  <NavigationBar {...props} authUser={authUser} />
);

export const 戻るあり = () => <NavigationBar {...props} back />;

export const 全量 = () => <NavigationBar {...props} back authUser={authUser} />;
