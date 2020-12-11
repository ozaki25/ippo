import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import A2HSDialog from '.';

export default {
  title: 'organisms/A2HSDialog',
};

const props = {
  open: boolean('open', true),
  onClose: action('onClose'),
};

export const 通常パターン = () => <A2HSDialog {...props} />;
