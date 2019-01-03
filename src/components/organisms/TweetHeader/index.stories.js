import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import TweetHeader from '.';

const stories = storiesOf('organisms/TweetHeader', module);

const props = {
  name: text('name', 'ozaki25'),
  time: text('time', '12月10日'),
};

stories.add('通常パターン', () => <TweetHeader {...props} />);
