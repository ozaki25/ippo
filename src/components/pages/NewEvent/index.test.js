import React from 'react';
import { snapshot } from 'test/helpers';
import NewEvent from '.';

const props = {
  createEvent: jest.fn(),
};

snapshot('NewEvent/nomal', <NewEvent {...props} />);
