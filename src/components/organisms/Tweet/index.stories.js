import React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Tweet from '.';

export default {
  title: 'organisms/Tweet',
};

const props = {
  name: text('name', 'ozaki25'),
  text: text(
    'text',
    `Storybookいいところ
  - どんなコンポーネントが存在してるか可視化できる
  - コンポーネントの扱い方が分かる
  - UIの修正デバッグが楽
  #ThinkAtomicDesign`,
  ),
  time: text('time', '12月10日'),
  onClickReply: action('reply'),
  onClickLike: action('like'),
};

export const 通常パターン = () => <Tweet {...props} />;

export const 固定 = () => <Tweet {...props} fixed />;
