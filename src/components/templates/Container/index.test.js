import React from 'react';
import { snapshot } from 'test/helpers';
import Container from '.';

const props = {
  children: 'テスト',
};

snapshot('Container/padding', <Container {...props} />);

snapshot('Container/nopadding', <Container {...props} noPadding={true} />);
