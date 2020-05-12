import React from 'react';
import { action } from '@storybook/addon-actions';
import SigninForm from '.';

export default {
  title: 'organisms/SigninForm',
};

export const 通常パターン = () => <SigninForm onSubmit={action('onSubmit')} />;

export const エラー = () => (
  <SigninForm
    onSubmit={() =>
      new Promise((resolve, reject) =>
        reject(
          new Error(
            'The password is invalid or the user does not have a password.',
          ),
        ),
      )
    }
  />
);
