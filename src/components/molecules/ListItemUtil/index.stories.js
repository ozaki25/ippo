import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import ListItemUtil from '.';
import { List } from '@material-ui/core';

const stories = storiesOf('molecules/ListItemUtil', module);

const props = {
  primary: text('primary', '見出しをここに書きます'),
  secondary: text('secondary', '説明文とかそんな感じのことをここに書いていきます'),
  onChange: action('change'),
  checked: boolean('checked', false),
};

stories.add('文章のみ', () => (
  <List>
    <ListItemUtil {...props} />
  </List>
));

stories.add('スイッチ', () => (
  <List>
    <ListItemUtil {...props} toggle />
  </List>
));

stories.add('スイッチ非活性', () => (
  <List>
    <ListItemUtil {...props} toggle disabled />
  </List>
));

stories.add('チェックボックス', () => (
  <List>
    <ListItemUtil {...props} checkbox />
  </List>
));

stories.add('チェックボックス非活性', () => (
  <List>
    <ListItemUtil {...props} checkbox disabled />
  </List>
));
