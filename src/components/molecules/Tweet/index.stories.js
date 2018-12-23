import React from 'react';
import { storiesOf } from '@storybook/react';
import Tweet from '.';

const stories = storiesOf('molecules/Tweet', module);

const props = {
  name: 'ozaki25',
  text: `Storybookいいところ
  - どんなコンポーネントが存在してるか可視化できる
  - コンポーネントの扱い方が分かる
  - UIの修正デバッグが楽
  #ThinkAtomicDesign`,
  time: '12月10日',
};

stories.add('通常パターン', () => <Tweet {...props} />);
