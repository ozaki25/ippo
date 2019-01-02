import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SignupForm from '.';

const stories = storiesOf('organisms/SignupForm', module);

stories.add('通常パターン', () => <SignupForm onSubmit={action('onSubmit')} />);

stories.add('エラー', () => (
  <SignupForm
    onSubmit={() =>
      new Promise((resolve, reject) =>
        reject(new Error('The email address is already in use by another account.')),
      )
    }
  />
));
