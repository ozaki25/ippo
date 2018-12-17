import React from 'react';
import { snapshot } from 'test/helpers';
import Publish from '.';

const props = {
  publishNotification: jest.fn(),
};

snapshot('Publish/nomal', <Publish {...props} />);
