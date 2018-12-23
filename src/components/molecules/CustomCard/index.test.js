import React from 'react';
import { snapshot } from 'test/helpers';
import CustomCard from '.';

const props = {
  children: <h2>Hello</h2>,
  history: {
    push: jest.fn(),
  },
  url: 'https://connpass.com/',
};

snapshot('CustomCard/nomal', <CustomCard {...props} />);

snapshot('CustomCard/expand', <CustomCard {...props} expand />);
