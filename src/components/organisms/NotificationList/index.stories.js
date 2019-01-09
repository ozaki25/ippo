import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import NotificationList from '.';

const stories = storiesOf('organisms/NotificationList', module);

const props = {
  history: {
    push: action('push'),
    goBack: action('goBack'),
  },
};

stories.add('通常パターン', () => <NotificationList {...props} />);
