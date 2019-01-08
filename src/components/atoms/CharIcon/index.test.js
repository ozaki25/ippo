import React from 'react';
import { snapshot } from 'test/helpers';
import CharIcon from '.';

const props = {
  name: 'ozaki25',
  onClick: jest.fn(),
};

snapshot('CharIcon/nomal', <CharIcon {...props} />);

snapshot('CharIcon/small', <CharIcon {...props} small />);
