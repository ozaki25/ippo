import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import TweetDetail from '.';

const stories = storiesOf('organisms/TweetDetail', module);

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
  time: text('time', '2019/01/19 01:44'),
  onClickReply: action('reply'),
  onClickLike: action('like'),
};

stories.add('通常パターン', () => <TweetDetail {...props} />);
