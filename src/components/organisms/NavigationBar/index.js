import React from 'react';
import { Alignment, Button, Navbar } from '@blueprintjs/core';
import propTypes from 'prop-types';

const NavigationBar = ({ history }) => (
  <Navbar>
    <Navbar.Group align={Alignment.LEFT}>
      <Navbar.Heading>IPPO</Navbar.Heading>
      <Navbar.Divider />
    </Navbar.Group>
    <Navbar.Group align={Alignment.RIGHT}>
      <Button icon="wrench" minimal onClick={() => history.push('/notifications/publish')} />
    </Navbar.Group>
  </Navbar>
);

NavigationBar.displayName = 'NavigationBar';

NavigationBar.propTypes = {
  history: propTypes.object.isRequired,
};

export default NavigationBar;
