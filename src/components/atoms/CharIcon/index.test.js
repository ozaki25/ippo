import React from 'react';
import { snapshot } from 'test/helpers';
import CharIcon from '.';

const props = {
  name: 'ozaki25',
};

snapshot('CharIcon/nomal', <CharIcon {...props} />);
