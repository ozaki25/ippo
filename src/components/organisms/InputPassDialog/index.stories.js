import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import InputPassDialog from '.';

const stories = storiesOf('organisms/InputPassDialog', module);

const props = {
  open: boolean('open', true),
  onClick: action('click'),
};

stories.add('通常パターン', () => <InputPassDialog {...props} />);
