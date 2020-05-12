import React from 'react';
import { snapshot } from 'src/test/helpers';
import GoogleButton from '.';

const props = () => ({
  onClick: jest.fn(),
});

snapshot('GoogleButton/nomal', <GoogleButton {...props({})} />);
