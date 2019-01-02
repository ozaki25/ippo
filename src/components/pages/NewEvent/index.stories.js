import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import NewEvent from '.';

const stories = storiesOf('pages/NewEvent', module);

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

stories.add('通常パターン', () => <NewEvent {...props} />);
