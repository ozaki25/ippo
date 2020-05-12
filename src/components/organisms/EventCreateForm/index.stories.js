import React from 'react';
import { action } from '@storybook/addon-actions';
import EventCreateForm from '.';

export default {
  title: 'organisms/EventCreateForm',
};

export const 通常パターン場合 = () => (
  <EventCreateForm onSubmit={action('onSubmit')} />
);

export const エラー = () => (
  <EventCreateForm
    onSubmit={() =>
      new Promise((resolve, reject) =>
        reject(new Error('TypeError: Failed to fetch')),
      )
    }
  />
);
