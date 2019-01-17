import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import NavigationBar from '.';

const stories = storiesOf('organisms/NavigationBar', module);

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

stories.add('ログイン未済', () => <NavigationBar {...props} />);

stories.add('ログイン済み', () => <NavigationBar {...props} authUser={authUser} />);

stories.add('戻るあり', () => <NavigationBar {...props} back />);

stories.add('全量', () => <NavigationBar {...props} back authUser={authUser} />);