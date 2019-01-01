import React from 'react';
import Headroom from 'react-headroom';
import styled from 'styled-components';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { ArrowBackIosOutlined, ExitToApp } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';

const styles = theme => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    zIndex: 1300,
  },
});

const Title = styled(Typography)`
  flex-grow: 1;
`;

const StyledToolbar = styled(Toolbar)`
  padding-left: ${({ back }) => (back ? '0' : '16px')};
`;

const NavigationBar = ({ title, history, firebase, authUser, back, classes }) => (
  <Headroom className={classes.appBar} style={{ position: 'fixed' }}>
    <AppBar position="static" color="primary">
      <StyledToolbar back={back ? 1 : 0} disableGutters>
        {back && (
          <IconButton color="inherit" onClick={history.goBack}>
            <ArrowBackIosOutlined />
          </IconButton>
        )}
        <Title variant="h6" color="inherit">
          {title}
        </Title>
        {authUser && (
          <>
            <Typography color="inherit">{authUser.displayName}</Typography>
            <IconButton color="inherit" onClick={firebase.doSignOut}>
              <ExitToApp />
            </IconButton>
          </>
        )}
      </StyledToolbar>
    </AppBar>
  </Headroom>
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

export default withStyles(styles)(NavigationBar);
