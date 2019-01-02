import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FloatingButton from '.';

const stories = storiesOf('molecules/FloatingButton', module);

const props = {
  onClick: action('onClick'),
};

stories.add('Add', () => <FloatingButton {...props} icon="add" />);

stories.add('Edit', () => <FloatingButton {...props} icon="edit" />);

stories.add('Notifications', () => <FloatingButton {...props} icon="notifications" />);
