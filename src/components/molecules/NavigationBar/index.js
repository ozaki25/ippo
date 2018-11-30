import React from 'react';
import { Navbar } from '@blueprintjs/core';

const NavigationBar = ({ appName }) => (
  <Navbar>
    <Navbar.Group>
      <Navbar.Heading>{appName}</Navbar.Heading>
    </Navbar.Group>
  </Navbar>
);

NavigationBar.displayName = 'NavigationBar';

export default NavigationBar;
