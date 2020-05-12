import React from 'react';
import { action } from '@storybook/addon-actions';
import CustomCard from '.';

export default {
  title: 'molecules/CustomCard',
};

const props = {
  history: {
    push: action('push'),
  },
  url: 'https://connpass.com/',
};

export const 通常パターン = () => (
  <CustomCard {...props}>
    <h3>Hello</h3>
  </CustomCard>
);

export const 拡張パターン = () => (
  <CustomCard {...props} expand>
    <h3>Hello</h3>
  </CustomCard>
);
