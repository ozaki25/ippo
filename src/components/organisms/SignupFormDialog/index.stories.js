import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import SignupFormDialog from '.';

const stories = storiesOf('organisms/SignupFormDialog', module);

const props = {
  isOpen: boolean('isOpen', true),
  onSubmit: action('onSubmit'),
  onClose: action('onClose'),
};

stories.add('通常パターン', () => <SignupFormDialog {...props} />);
