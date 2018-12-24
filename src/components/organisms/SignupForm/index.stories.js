import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SignupForm from '.';

const stories = storiesOf('organisms/SignupForm', module);

stories.add('通常パターン', () => (
  <SignupForm onSubmit={action('onSubmit')}  />
));
