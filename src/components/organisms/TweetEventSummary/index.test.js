import React from 'react';
import { snapshot } from 'test/helpers';
import TweetEventSummary from '.';

const props = {
  hashtag: 'test',
  id: '1546779693296',
  title: 'テストイベント',
  catchMessage: 'テスト用イベントです',
  place: '晴海3階',
  name: 'ozaki25',
  startedAt: '2018-12-10T19:00',
  onClickJoin: jest.fn(),
  onClickLeave: jest.fn(),
};

snapshot('TweetEventSummary/nomal', <TweetEventSummary {...props} />);

snapshot('TweetEventSummary/joined', <TweetEventSummary {...props} joined />);
