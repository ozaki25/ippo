import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Tweet from '.';

const stories = storiesOf('organisms/Tweet', module);

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

stories.add('通常パターン', () => <Tweet {...props} />);

stories.add('固定', () => <Tweet {...props} fixed />);
