import React from 'react';
import { snapshot } from 'src/test/helpers';
import EventCreateForm from '.';

const props = {
  onSubmit: jest.fn(),
};

snapshot('EventCreateForm/nomal', <EventCreateForm {...props} />);
