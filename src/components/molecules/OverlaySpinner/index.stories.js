import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import OverlaySpinner from '.';

export default {
  title: 'molecules/OverlaySpinner',
};

export const 通常パターン = () => (
  <OverlaySpinner visible={boolean('visible', true)} />
);
