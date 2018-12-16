import React from 'react';
import { snapshot } from 'test/helpers';
import RoundButton from '.';

const props = ({ large = false }) => ({
  icon: 'notifications',
  large,
});

snapshot('RoundButton/nomal', <RoundButton {...props({})} />);

snapshot('RoundButton/bigsize', <RoundButton {...props({ large: true })} />);
