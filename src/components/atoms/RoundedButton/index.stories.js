import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import RoundedButton from '.';

const stories = storiesOf('atoms/RoundedButton', module);

const props = {
  children: text('text', 'ボタン'),
  onClick: action('click'),
};

stories.add('通常パターン', () => <RoundedButton {...props} />);
