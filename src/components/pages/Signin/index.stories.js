import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Signin from '.';

const stories = storiesOf('pages/Signin', module);

const props = {
  history: {
    push: action('push'),
    replace: action('replace'),
    goBack: action('goBack'),
  },
  firebase: {
    doSignInWithEmailAndPassword: action('signin', 'signin'),
  },
};

stories.add('通常パターン', () => <Signin {...props} />);
