import React from 'react';
import { action } from '@storybook/addon-actions';
import GoogleButton from '.';

export default {
  title: 'atoms/GoogleButton',
};

export const 通常パターン = () => <GoogleButton onClick={action('click')} />;
