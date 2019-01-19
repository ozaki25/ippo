import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import TweetBody from '.';

const stories = storiesOf('organisms/TweetBody', module);

const props = {
  text: text(
    'text',
    `Storybookいいところ
  - どんなコンポーネントが存在してるか可視化できる
  - コンポーネントの扱い方が分かる
  - UIの修正デバッグが楽
  #ThinkAtomicDesign`,
  ),
};

stories.add('通常パターン', () => <TweetBody {...props} />);

stories.add('文字サイズ大きめ', () => <TweetBody {...props} bigText />);
