import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import A2HSDialog from '.';

const stories = storiesOf('organisms/A2HSDialog', module);

const props = {
  open: boolean('open', true),
  onClose: action('onClose'),
};

stories.add('通常パターン', () => <A2HSDialog {...props} />);
