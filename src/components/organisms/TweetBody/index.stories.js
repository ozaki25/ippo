import React from 'react';
import { text } from '@storybook/addon-knobs';
import TweetBody from '.';

export default {
  title: 'organisms/TweetBody',
};

export const 文字サイズ大きめ = () => (
  <TweetBody
    text={text(
      'text',
      `Storybookいいところ
  - どんなコンポーネントが存在してるか可視化できる
  - コンポーネントの扱い方が分かる
  - UIの修正デバッグが楽
  #ThinkAtomicDesign`,
    )}
    bigText
  />
);

export const ハッシュタグ有り = () => (
  <TweetBody
    text={text(
      'text',
      `Storybookいいところ
  - どんなコンポーネントが存在してるか可視化できる
  - コンポーネントの扱い方が分かる
  - UIの修正デバッグが楽
  #ThinkAtomicDesign`,
    )}
  />
);

export const リンク有り = () => (
  <TweetBody
    text={text(
      'text',
      `リンク有りのツイート
https://github.com/ozaki25/ippo/commit/08a791084bc78c7990153d06c06068c2e1457c01#diff-ded5796553e17f3b91a36dd3fa989d76L79`,
    )}
  />
);

export const リンク_ハッシュタグ有り = () => (
  <TweetBody
    text={text(
      'text',
      `リンク有りのツイート
https://github.com/ozaki25/ippo/commit/08a791084bc78c7990153d06c06068c2e1457c01#diff-ded5796553e17f3b91a36dd3fa989d76L79
#ThinkAtomicDesign`,
    )}
  />
);
