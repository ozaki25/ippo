import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';
import CharIcon from 'src/components/atoms/CharIcon';

const styles = {
  list: {
    width: '250px',
  },
};

const SideMenu = ({ open, name, onOpen, onClose, signout, classes }) => (
  <SwipeableDrawer anchor="right" open={open} onClose={onClose} onOpen={onOpen}>
    <div tabIndex={0} onClick={onClose} onKeyDown={onClose}>
      <div className={classes.list}>
        <List>
          <ListItem>
            <ListItemIcon>
              <CharIcon name={name} />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemText primary={name} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem onClick={signout} button>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="ログアウト" />
          </ListItem>
        </List>
      </div>
    </div>
  </SwipeableDrawer>
);

SideMenu.displayName = 'SideMenu';

SideMenu.propTypes = {
  open: propTypes.bool.isRequired,
  name: propTypes.string.isRequired,
  onOpen: propTypes.func.isRequired,
  onClose: propTypes.func.isRequired,
  signout: propTypes.func,
};

SideMenu.defaultProps = {
  signout: null,
};

export default withStyles(styles)(SideMenu);
