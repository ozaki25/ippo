import React from 'react';
import { Alignment, Button, Navbar } from '@blueprintjs/core';
import propTypes from 'prop-types';
import ROUTES from 'src/constants/routes';

const NavigationBar = ({ history, firebase, authUser }) => (
  <Navbar>
    <Navbar.Group align={Alignment.LEFT}>
      <Navbar.Heading>IPPO</Navbar.Heading>
      <Navbar.Divider />
    </Navbar.Group>
    <Navbar.Group align={Alignment.RIGHT}>
      <Button icon="wrench" minimal onClick={() => history.push(ROUTES.Publish)} />
      {authUser && <Button icon="log-out" minimal onClick={firebase.doSignOut} />}
    </Navbar.Group>
  </Navbar>
);

NavigationBar.displayName = 'NavigationBar';

NavigationBar.propTypes = {
  history: propTypes.shape({
    push: propTypes.func,
  }),
  firebase: propTypes.shape({
    doSignOut: propTypes.func,
  }),
  authUser: propTypes.object,
};

NavigationBar.defaultProps = {
  history: null,
  firebase: null,
  authUser: null,
};

export default NavigationBar;
