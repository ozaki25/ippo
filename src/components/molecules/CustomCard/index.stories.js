import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CustomCard from '.';

const stories = storiesOf('molecules/CustomCard', module);

const props = {
  history: {
    push: action('push'),
  },
  url: 'https://connpass.com/',
};

stories.add('通常パターン', () => (
  <CustomCard {...props}>
    <h3>Hello</h3>
  </CustomCard>
));

stories.add('拡張パターン', () => (
  <CustomCard {...props} expand>
    <h3>Hello</h3>
  </CustomCard>
));
