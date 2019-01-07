import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import PopMessage from '.';

const stories = storiesOf('atoms/PopMessage', module);

const props = {
  anchorEl: document.body,
  handleClose: action('close'),
  children: text('children', 'メッセージ'),
};

stories.add('通常パターン', () => <PopMessage {...props} />);
