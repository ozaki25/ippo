import React from 'react';
import { snapshot } from 'test/helpers';
import SerchForm from '.';

const props = {
  search: jest.fn(),
};

snapshot('SerchForm/nomal', <SerchForm {...props} />);
