import React from 'react';
import styled from 'styled-components';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { ArrowBackIosOutlined, ExitToApp } from '@material-ui/icons';
import propTypes from 'prop-types';

const Title = styled(Typography)`
  flex-grow: 1;
`;

const NavigationBar = ({ title, history, firebase, authUser, back }) => (
  <AppBar position="static" color="primary">
    <Toolbar disableGutters={back}>
      {back && (
        <IconButton color="primary" onClick={history.goBack}>
          <ArrowBackIosOutlined color="action" />
        </IconButton>
      )}
      <Title variant="h6" color="inherit">
        {title}
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
  title: propTypes.string,
  history: propTypes.shape({
    push: propTypes.func,
  }),
  firebase: propTypes.shape({
    doSignOut: propTypes.func,
  }),
  authUser: propTypes.object,
  back: propTypes.bool,
};

NavigationBar.defaultProps = {
  title: '',
  history: null,
  firebase: null,
  authUser: null,
  back: false,
};

export default NavigationBar;
