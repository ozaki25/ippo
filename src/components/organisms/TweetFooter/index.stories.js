import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TweetFooter from '.';

const stories = storiesOf('organisms/TweetFooter', module);

const props = {
  onClickReply: action('onClickReply'),
  onClickRetweet: action('onClickRetweet'),
  onClickLike: action('onClickLike'),
};

stories.add('通常パターン', () => <TweetFooter {...props} />);
