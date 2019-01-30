import React from 'react';
import { snapshot } from 'test/helpers';
import Tweet from '.';

const props = {
  name: 'ozaki25',
  text: `Storybookいいところ
  - どんなコンポーネントが存在してるか可視化できる
  - コンポーネントの扱い方が分かる
  - UIの修正デバッグが楽
  #ThinkAtomicDesign`,
  time: '2019/01/19 01:44',
  onClickReply: jest.fn(),
  onClickLike: jest.fn(),
};

snapshot('Tweet/nomal', <Tweet {...props} />);
