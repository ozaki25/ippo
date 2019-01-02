import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import EventCreateForm from '.';

const stories = storiesOf('organisms/EventCreateForm', module);

stories.add('通常パターン場合', () => <EventCreateForm onSubmit={action('onSubmit')} />);

stories.add('エラー', () => (
  <EventCreateForm
    onSubmit={() =>
      new Promise((resolve, reject) => reject(new Error('TypeError: Failed to fetch')))
    }
  />
));
