import React from 'react';
import { snapshot } from 'src/test/helpers';
import ShrinkSwipeable from '.';

const props = {
  children: [
    <h1 key="1">テスト1</h1>,
    <h1 key="2">テスト2</h1>,
    <h1 key="3">テスト3</h1>,
    <h1 key="4">テスト4</h1>,
    <h1 key="5">テスト5</h1>,
  ],
};

snapshot('ShrinkSwipeable/nomal', <ShrinkSwipeable {...props} />);
