import React from 'react';
import { snapshot } from 'test/helpers';
import TweetForm from '.';

const props = {
  onSubmit: jest.fn(),
};

snapshot('TweetForm/nomal', <TweetForm {...props} />);
