import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Notification from '.';

const stories = storiesOf('pages/Notification', module);

const props = {
  publishNotification: action('publish'),
  registerNotification: action('register'),
};

stories.add('通常パターン', () => <Notification {...props} />);
