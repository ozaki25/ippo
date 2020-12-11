import React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import RoundedButton from '.';

export default {
  title: 'atoms/RoundedButton',
};

const props = {
  children: text('text', 'ボタン'),
  onClick: action('click'),
};

export const 通常パターン = () => <RoundedButton {...props} />;
