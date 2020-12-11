import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import PopMessage from '.';

export default {
  title: 'atoms/PopMessage',
};

const props = {
  anchorEl: document.body,
  handleClose: action('close'),
  children: text('children', 'メッセージ'),
};

export const 通常パターン = () => <PopMessage {...props} />;
