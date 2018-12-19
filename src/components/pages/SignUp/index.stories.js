import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Signup from '.';

const stories = storiesOf('pages/Signup', module);

const props = {
  history: {
    push: action('push', 'push'),
  },
  firebase: {
    doCreateUserWithEmailAndPassword: action('signin', 'signin'),
  },
};

stories.add('通常パターン', () => <Signup {...props} />);
