import React from 'react';
import { snapshot } from 'test/helpers';
import SideMenu from '.';

const props = {
  open: true,
  name: 'なまえ',
  onOpen: jest.fn(),
  onClose: jest.fn(),
  signout: jest.fn(),
};

snapshot('SideMenu/nomal', <SideMenu {...props} />);
