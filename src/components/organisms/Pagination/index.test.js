import React from 'react';
import { snapshot } from 'test/helpers';
import Pagination from '.';

const props = ({ current, total = 10, large = false }) => ({
  current,
  total,
  large,
  onClick: jest.fn(),
});

snapshot('Pagination/first', <Pagination {...props({ current: 1 })} />);

snapshot('Pagination/middle', <Pagination {...props({ current: 5 })} />);

snapshot('Pagination/last', <Pagination {...props({ current: 10 })} />);

snapshot('Pagination/button/large', <Pagination {...props({ current: 5, large: true })} />);
