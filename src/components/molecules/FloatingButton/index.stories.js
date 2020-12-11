import React from 'react';
import { action } from '@storybook/addon-actions';
import FloatingButton from '.';

export default {
  title: 'molecules/FloatingButton',
};

const props = {
  onClick: action('onClick'),
};

export const Add = () => <FloatingButton {...props} icon="add" />;

export const Edit = () => <FloatingButton {...props} icon="edit" />;

export const Notifications = () => (
  <FloatingButton {...props} icon="notifications" />
);
