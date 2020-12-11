import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import ListItemUtil from '.';
import { List } from '@material-ui/core';

export default {
  title: 'molecules/ListItemUtil',
};

const props = {
  primary: text('primary', '見出しをここに書きます'),
  secondary: text(
    'secondary',
    '説明文とかそんな感じのことをここに書いていきます',
  ),
  onChange: action('change'),
  checked: boolean('checked', false),
};

export const 文章のみ = () => (
  <List>
    <ListItemUtil {...props} />
  </List>
);

export const スイッチ = () => (
  <List>
    <ListItemUtil {...props} toggle />
  </List>
);

export const スイッチ非活性 = () => (
  <List>
    <ListItemUtil {...props} toggle disabled />
  </List>
);

export const チェックボックス = () => (
  <List>
    <ListItemUtil {...props} checkbox />
  </List>
);

export const チェックボックス非活性 = () => (
  <List>
    <ListItemUtil {...props} checkbox disabled />
  </List>
);
