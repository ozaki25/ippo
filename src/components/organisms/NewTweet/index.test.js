import React from 'react';
import { snapshot } from 'test/helpers';
import NewTweet from '.';

const props = {};

snapshot('NewTweet/nomal', <NewTweet {...props} />);
