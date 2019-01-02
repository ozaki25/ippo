import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Container from '.';

const stories = storiesOf('templates/Container', module);

const props = {
  title: text('title', 'タイトル'),
  children: text('children', 'コンテンツ'),
  authUser: {
    uid: '123',
    displayName: 'テストユーザ',
  },
  history: {
    push: action('push'),
    goBack: action('goBack'),
  },
  firebase: {},
};

stories.add('paddingあり', () => <Container {...props} />);

stories.add('paddingなし', () => <Container {...props} noPadding />);

stories.add('戻るあり', () => <Container {...props} back />);

stories.add('ヘッダーなし', () => <Container {...props} header={false} />);
