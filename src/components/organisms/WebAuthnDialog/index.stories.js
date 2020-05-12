import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import WebAuthnDialog from '.';

export default {
  title: 'organisms/WebAuthnDialog',
};

const props = {
  open: boolean('open', true),
  onClose: action('onClose'),
};

export const 通常パターン = () => <WebAuthnDialog {...props} />;
