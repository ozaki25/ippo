import React from 'react';
import styled from 'styled-components';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';
import propTypes from 'prop-types';

const Title = styled(Typography)`
  flex-grow: 1;
`;

const NavigationBar = ({ history, firebase, authUser }) => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Title variant="h6" color="inherit">
        IPPO
      </Title>
      {authUser && (
        <>
          <Typography>{authUser.displayName}</Typography>
          <IconButton onClick={firebase.doSignOut}>
            <ExitToApp />
          </IconButton>
        </>
      )}
    </Toolbar>
  </AppBar>
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
