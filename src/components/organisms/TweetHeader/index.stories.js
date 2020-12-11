import React from 'react';
import { text } from '@storybook/addon-knobs';
import TweetHeader from '.';

export default {
  title: 'organisms/TweetHeader',
};

const props = {
  name: text('name', 'ozaki25'),
  time: text('time', '12月10日'),
};

export const 通常パターン = () => <TweetHeader {...props} />;
