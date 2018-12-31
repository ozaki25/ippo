import React from 'react';
import { storiesOf } from '@storybook/react';
import IconImage from '.';

const stories = storiesOf('atoms/IconImage', module);

const props = {
  src: '/icon.png',
};

stories.add('通常パターン', () => <IconImage {...props} />);
