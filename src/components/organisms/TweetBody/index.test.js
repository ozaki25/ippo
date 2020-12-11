import React from 'react';
import { snapshot } from 'src/test/helpers';
import TweetBody from '.';

const props = {
  text: `Storybookいいところ
  - どんなコンポーネントが存在してるか可視化できる
  - コンポーネントの扱い方が分かる
  - UIの修正デバッグが楽
  #ThinkAtomicDesign`,
};

snapshot('TweetBody/nomal', <TweetBody {...props} />);

snapshot('TweetBody/big', <TweetBody {...props} bigText />);
