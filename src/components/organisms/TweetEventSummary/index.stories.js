import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import TweetEventSummary from '.';

const stories = storiesOf('organisms/TweetEventSummary', module);

const props = {
  hashtag: text('hashtag', 'react_handson'),
  id: text('id', '1546779693296'),
  title: text('title', 'Reactハンズオン'),
  catchMessage: text('catchMessage', '初心者向けにReactのハンズオンをやります！'),
  place: text('place', '晴海3階'),
  name: text('name', 'ozaki25'),
  startedAt: text('startedAt', '2018-12-10T19:00'),
  onClickJoin: action('join'),
  onClickLeave: action('leave'),
};

stories.add('申し込み前', () => <TweetEventSummary {...props} />);

stories.add('申し込み後', () => <TweetEventSummary {...props} joined />);
