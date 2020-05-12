import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import InputPassDialog from '.';

export default {
  title: 'organisms/InputPassDialog',
};

const props = {
  open: boolean('open', true),
  onClick: action('click'),
};

export const 通常パターン = () => <InputPassDialog {...props} />;
