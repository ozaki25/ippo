import React from 'react';
import { storiesOf } from '@storybook/react';
import ShrinkSwipeable from '.';

const stories = storiesOf('templates/ShrinkSwipeable', module);

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

stories.add('通常パターン', () => <ShrinkSwipeable children={items} />);
