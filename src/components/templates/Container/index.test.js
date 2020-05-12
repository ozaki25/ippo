import React from 'react';
import { snapshot } from 'src/test/helpers';
import Container from '.';

const props = {
  children: 'テスト',
  authUser: {
    uid: '123',
    displayName: 'テストユーザ',
  },
  history: {
    push: jest.fn(),
    goBack: jest.fn(),
  },
  firebase: {},
};

snapshot('Container/padding', <Container {...props} />);

snapshot('Container/nopadding', <Container {...props} noPadding />);

snapshot('Container/back', <Container {...props} back />);

snapshot('Container/noheader', <Container {...props} header={false} />);
