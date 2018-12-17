import React from 'react';
import { snapshot } from 'test/helpers';
import Container from '.';

const props = {
  children: 'テスト',
};

snapshot('Container/nomal', <Container {...props} />);
