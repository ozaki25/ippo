import React from 'react';
import { snapshot } from 'test/helpers';
import FloatingButton from '.';

const props = {
  onClick: jest.fn(),
};

snapshot('FloatingButton/one', <FloatingButton {...props} icon="add" />);

snapshot('FloatingButton/two', <FloatingButton {...props} icon="edit" />);

snapshot('FloatingButton/three', <FloatingButton {...props} icon="notifications" />);
