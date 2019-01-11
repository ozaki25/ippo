import React from 'react';
import { snapshot } from 'test/helpers';
import ListItemWithToggle from '.';
import { List } from '@material-ui/core';

const props = {
  primary: '大見出し',
  secondary: '小見出し',
  onChange: jest.fn(),
};

snapshot(
  'ListItemWithToggle/nomal',
  <List>
    <ListItemWithToggle {...props} />
  </List>,
);

snapshot(
  'ListItemWithToggle/switch',
  <List>
    <ListItemWithToggle {...props} toggle />
  </List>,
);

snapshot(
  'ListItemWithToggle/switch/disabled',
  <List>
    <ListItemWithToggle {...props} toggle disabled />
  </List>,
);

snapshot(
  'ListItemWithToggle/checkbox/',
  <List>
    <ListItemWithToggle {...props} />
  </List>,
);

snapshot(
  'ListItemWithToggle/checkbox/disabled',
  <List>
    <ListItemWithToggle {...props} checkbox disabled />
  </List>,
);
