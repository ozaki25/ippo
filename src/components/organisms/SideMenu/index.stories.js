import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import SideMenu from '.';

const stories = storiesOf('organisms/SideMenu', module);

const props = {
  name: text('name', 'なまえ あいうえお'),
  onOpen: action('open'),
  onClose: action('close'),
  signout: action('signout'),
  history: {
    push: action('push'),
    replace: action('replace'),
    goBack: action('goBack'),
  },
};

stories.add('open', () => <SideMenu {...props} open />);

stories.add('close', () => <SideMenu {...props} open={false} />);
