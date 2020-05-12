import React from 'react';
import { snapshot } from 'src/test/helpers';
import TweetHeader from '.';

const props = {
  name: 'ozaki25',
  time: '12月10日',
};

snapshot('TweetHeader/nomal', <TweetHeader {...props} />);
