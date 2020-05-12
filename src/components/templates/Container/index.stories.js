import React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Container from '.';

export default {
  title: 'templates/Container',
};

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

export const paddingあり = () => <Container {...props} />;

export const paddingなし = () => <Container {...props} noPadding />;

export const 戻るあり = () => <Container {...props} back />;

export const ヘッダーなし = () => <Container {...props} header={false} />;
