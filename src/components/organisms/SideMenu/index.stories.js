import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import SideMenu from '.';

export default {
  title: 'organisms/SideMenu',
};

const props = {
  authUser: {
    uid: text('uid', '123'),
    displayName: text('name', 'なまえ あいうえお'),
  },
  onOpen: action('open'),
  onClose: action('close'),
  signout: action('signout'),
  history: {
    push: action('push'),
    replace: action('replace'),
    goBack: action('goBack'),
  },
};

export const open = () => <SideMenu {...props} open />;

export const close = () => <SideMenu {...props} open={false} />;
