import React from 'react';
import { snapshot } from 'test/helpers';
import FloatingButtonList from '.';

const item = { icon: 'notifications', onClick: jest.fn() };

const props = count => ({
  items: [...[...Array(count)].map(() => item)],
});

snapshot('FloatingButtonList/one', <FloatingButtonList {...props(1)} />);

snapshot('FloatingButtonList/two', <FloatingButtonList {...props(2)} />);

snapshot('FloatingButtonList/three', <FloatingButtonList {...props(3)} />);
