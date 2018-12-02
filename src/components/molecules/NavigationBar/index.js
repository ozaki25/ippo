import React from 'react';
import { Navbar } from '@blueprintjs/core';
import PropTypes from 'prop-types';

const NavigationBar = ({ appName }) => (
  <Navbar>
    <Navbar.Group>
      <Navbar.Heading>{appName}</Navbar.Heading>
    </Navbar.Group>
  </Navbar>
);

NavigationBar.displayName = 'NavigationBar';

NavigationBar.propTypes = {
  appName: PropTypes.string.isRequired,
};

export default NavigationBar;
