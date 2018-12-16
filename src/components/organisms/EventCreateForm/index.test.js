import React from 'react';
import { snapshot } from 'test/helpers';
import EventCreateForm from '.';

const props = {
  onSubmit: jest.fn(),
};

snapshot('EventCreateForm/nomal', <EventCreateForm {...props} />);
