import React from 'react';
import { snapshot } from 'test/helpers';
import RoundedButton from '.';

const props = () => ({
  children: 'ボタン',
  onClick: jest.fn(),
});

snapshot('RoundedButton/nomal', <RoundedButton {...props({})} />);
