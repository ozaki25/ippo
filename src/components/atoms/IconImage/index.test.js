import React from 'react';
import { snapshot } from 'test/helpers';
import IconImage from '.';

const props = () => ({
  src: '/icon.png',
});

snapshot('IconImage/nomal', <IconImage {...props} />);
