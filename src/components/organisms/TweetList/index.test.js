import React from 'react';
import { snapshot } from 'test/helpers';
import TweetList from '.';

const props = {
  loadMore: jest.fn(),
  hasMore: true,
  items: [
    {
      id: '1',
      name: 'ozaki25',
      text: `PagesとOrganisms以外は状態を持たせない
  - それ以外のコンポーネントはステートレスなので簡単に作れる
  - Reduxみたいなところはフロントエンドエンジニアにまかせる
  #ThinkAtomicDesign`,
      time: '12月10日',
    },
    {
      id: '2',
      name: 'ozaki25',
      text: `コンポーネントマネージャー
  - コンポーネントの管理に責任を持つ人
  #ThinkAtomicDesign`,
      time: '12月10日',
    },
    {
      id: '3',
      name: 'ozaki25',
      text: `Storybookいいところ
  - どんなコンポーネントが存在してるか可視化できる
  - コンポーネントの扱い方が分かる
  - UIの修正デバッグが楽
  #ThinkAtomicDesign`,
      time: '12月10日',
    },
    {
      id: '4',
      name: 'ozaki25',
      text: `不必要にコンポーネント化しすぎた
  AtomicDesignあるあるだと思う
  #ThinkAtomicDesign`,
      time: '12月10日',
    },
    {
      id: '5',
      name: 'ozaki25',
      text: `これかな
  http://atomicdesign.bradfrost.com/chapter-4/ 
  #ThinkAtomicDesign`,
      time: '12月10日',
    },
    {
      id: '6',
      name: 'ozaki25',
      text: `AtomicDesignはベースにすぎなくてプロジェクトごとに柔軟に変えていくことも必要
  #ThinkAtomicDesign`,
      time: '12月10日',
    },
    {
      id: '7',
      name: 'ozaki25',
      text: `PagesとOrganismsどの単位でReduxをConnectするか
  #ThinkAtomicDesign`,
      time: '12月10日',
    },
    {
      id: '8',
      name: 'ozaki25',
      text: `コンポーネント指向
  - 見た目と機能をカプセル化
  #ThinkAtomicDesign`,
      time: '12月10日',
    },
    {
      id: '9',
      name: 'ozaki25',
      text: `Template必要なのか
  たしかに使ってない
  #ThinkAtomicDesign`,
      time: '12月10日',
    },
  ],
  uid: '123',
  history: {
    push: jest.fn(),
  },
};

snapshot('TweetList/nomal', <TweetList {...props} />);
