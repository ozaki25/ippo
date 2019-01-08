import React from 'react';
import { storiesOf } from '@storybook/react';
import SideMenu from '.';

const stories = storiesOf('organisms/SideMenu', module);

const props = {
  open: true,
};

stories.add('通常パターン', () => <SideMenu {...props} />);
