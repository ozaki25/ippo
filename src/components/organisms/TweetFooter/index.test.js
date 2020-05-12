import React from 'react';
import { snapshot } from 'src/test/helpers';
import TweetFooter from '.';

const props = {
  onClickReply: jest.fn(),
  onClickRetweet: jest.fn(),
  onClickLike: jest.fn(),
};

snapshot('TweetFooter/nomal', <TweetFooter {...props} />);
