import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import BasicAuthForm from '.';

const stories = storiesOf('organisms/BasicAuthForm', module);

stories.add('通常パターン', () => (
  <BasicAuthForm onSubmit={action('onSubmit')} buttonText={text('button', 'ボタン')} />
));
