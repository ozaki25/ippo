import React from 'react';
import { snapshot } from 'test/helpers';
import SideMenu from '.';

const props = {
  open: true,
};

snapshot('SideMenu/nomal', <SideMenu {...props} />);
