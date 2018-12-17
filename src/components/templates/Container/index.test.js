import React from 'react';
import { snapshot } from 'test/helpers';
import Container from '.';

const props = {
  children: 'test',
};

snapshot('Container/nomal', <Container {...props} />);
