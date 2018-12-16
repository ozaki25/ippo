import React from 'react';
import { snapshot } from 'test/helpers';
import NavigationBar from '.';

const props = {
  appName: 'test',
};

snapshot('NavigationBar/nomal', <NavigationBar {...props} />);
