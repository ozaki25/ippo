import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import WebAuthnDialog from '.';

const stories = storiesOf('organisms/WebAuthnDialog', module);

const props = {
  open: boolean('open', true),
  onClose: action('onClose'),
};

stories.add('通常パターン', () => <WebAuthnDialog {...props} />);
