import React from 'react';
import { snapshot } from 'src/test/helpers';
import Pagination from '.';

const props = ({ current, total = 10 }) => ({
  current,
  total,
  onClick: jest.fn(),
});

snapshot('Pagination/first', <Pagination {...props({ current: 1 })} />);

snapshot('Pagination/middle', <Pagination {...props({ current: 5 })} />);

snapshot('Pagination/last', <Pagination {...props({ current: 10 })} />);
