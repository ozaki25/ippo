import React from 'react';
import Headroom from 'react-headroom';
import styled from 'styled-components';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { ArrowBackIosOutlined } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';
import CharIcon from 'src/components/atoms/CharIcon';
import SideMenu from 'src/components/organisms/SideMenu';

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
  padding-right: 16px;
`;

class NavigationBar extends React.Component {
  state = { open: false };

  openSideMenu = () => this.setState({ open: true });

  render() {
    const { title, history, firebase, authUser, back, classes } = this.props;
    const { open } = this.state;
    return (
      <>
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
                <CharIcon name={authUser.displayName} onClick={this.openSideMenu} small />
              )}
            </StyledToolbar>
          </AppBar>
        </Headroom>
        <SideMenu open={open} />
      </>
    );
  }
}

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
