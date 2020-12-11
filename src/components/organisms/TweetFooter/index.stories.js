import React from 'react';
import { action } from '@storybook/addon-actions';
import TweetFooter from '.';

export default {
  title: 'organisms/TweetFooter',
};

const props = {
  onClickReply: action('onClickReply'),
  onClickRetweet: action('onClickRetweet'),
  onClickLike: action('onClickLike'),
};

export const 通常パターン = () => <TweetFooter {...props} />;
