import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import FloatingButton from '.';

const stories = storiesOf('molecules/FloatingButton', module);

stories.add('通常パターン', () => (
  <FloatingButton icon={text('icon', 'notifications')} onClick={action('onClick')} />
));
