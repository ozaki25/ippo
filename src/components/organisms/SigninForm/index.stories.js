import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SigninForm from '.';

const stories = storiesOf('organisms/SigninForm', module);

stories.add('通常パターン', () => <SigninForm onSubmit={action('onSubmit')} />);

stories.add('エラー', () => (
  <SigninForm
    onSubmit={() =>
      new Promise((resolve, reject) =>
        reject(new Error('The password is invalid or the user does not have a password.')),
      )
    }
  />
));
