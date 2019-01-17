import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  SwipeableDrawer,
} from '@material-ui/core';
import { AccountBox, ExitToApp, NotificationsNoneRounded } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';
import CharIcon from 'src/components/atoms/CharIcon';
import ROUTES from 'src/constants/routes';

const styles = {
  list: {
    width: '250px',
  },
};

const SideMenu = ({ open, name, onOpen, onClose, signout, history, classes }) => (
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
        <List subheader={<ListSubheader>設定</ListSubheader>}>
          <ListItem onClick={() => history.push(ROUTES.SettingsAccount)} button>
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="アカウント" />
          </ListItem>
          <ListItem onClick={() => history.push(ROUTES.SettingsNotification)} button>
            <ListItemIcon>
              <NotificationsNoneRounded />
            </ListItemIcon>
            <ListItemText primary="通知" />
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
  history: propTypes.shape({
    push: propTypes.func,
    replace: propTypes.func,
    goBack: propTypes.func,
  }).isRequired,
};

SideMenu.defaultProps = {
  signout: null,
};

export default withStyles(styles)(SideMenu);