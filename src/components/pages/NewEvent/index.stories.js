import React from 'react';
import { action } from '@storybook/addon-actions';
import NewEvent from '.';

export default {
  title: 'pages/NewEvent',
};

const props = {
  createEvent: action('createEvent'),
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

export const 通常パターン = () => <NewEvent {...props} />;
