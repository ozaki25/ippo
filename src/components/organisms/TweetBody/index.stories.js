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

const propsLink = {
  text: text(
    'text',
    `リンク有りのツイート
https://github.com/ozaki25/ippo/commit/08a791084bc78c7990153d06c06068c2e1457c01#diff-ded5796553e17f3b91a36dd3fa989d76L79`,
  ),
};

stories.add('通常パターン', () => <TweetBody {...props} />);

stories.add('文字サイズ大きめ', () => <TweetBody {...props} bigText />);

stories.add('リンク有り', () => <TweetBody {...propsLink} />);
