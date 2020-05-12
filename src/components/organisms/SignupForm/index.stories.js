import React from 'react';
import { action } from '@storybook/addon-actions';
import SignupForm from '.';

export default {
  title: 'organisms/SignupForm',
};

export const 通常パターン = () => <SignupForm onSubmit={action('onSubmit')} />;

export const エラー = () => (
  <SignupForm
    onSubmit={() =>
      new Promise((resolve, reject) =>
        reject(
          new Error('The email address is already in use by another account.'),
        ),
      )
    }
  />
);
