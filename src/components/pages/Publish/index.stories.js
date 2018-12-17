import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Publish from '.';

const stories = storiesOf('pages/Publish', module);

const props = {
  publishNotification: action('publish'),
};

stories.add('通常パターン', () => <Publish {...props} />);
