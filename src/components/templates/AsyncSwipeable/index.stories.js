import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import AsyncSwipeable from '.';

export default {
  title: 'templates/AsyncSwipeable',
};

const style = {
  padding: 15,
  backgroundColor: 'lightblue',
};

const items = [
  <h1 style={style} key="1">
    テスト1
  </h1>,
  <h1 style={style} key="2">
    テスト2
  </h1>,
  <h1 style={style} key="3">
    テスト3
  </h1>,
  <h1 style={style} key="4">
    テスト4
  </h1>,
  <h1 style={style} key="5">
    テスト5
  </h1>,
];

export const 通常パターン = () => (
  <AsyncSwipeable loading={boolean('loading', false)} children={items} />
);

export const ローディング = () => (
  <AsyncSwipeable loading={boolean('loading', true)} />
);
