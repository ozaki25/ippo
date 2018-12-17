import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Container from '.';

const stories = storiesOf('templates/Container', module);

const props = {
  children: text('children', 'コンテンツ'),
};

stories.add('通常パターン', () => <Container {...props} />);
