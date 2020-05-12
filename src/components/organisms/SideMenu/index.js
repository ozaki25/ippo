import React from 'react';
import { connect } from 'react-redux';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  SwipeableDrawer,
} from '@material-ui/core';
import {
  AccountBox,
  AddBoxRounded,
  ExitToApp,
  Fingerprint,
  GetAppRounded,
  HomeRounded,
  NotificationsRounded,
  NotificationsNoneRounded,
} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';
import CharIcon from 'src/components/atoms/CharIcon';
import A2HSDialog from 'src/components/organisms/A2HSDialog';
import WebAuthnDialog from 'src/components/organisms/WebAuthnDialog';
import ROUTES from 'src/constants/routes';
import MENU_ITEMS from 'src/constants/menuItems';
import { setAuthUser } from 'src/modules/session';

const styles = {
  list: {
    width: '250px',
  },
};

class SideMenu extends React.Component {
  state = { isOpenA2HSDialog: false, isOpenWebAuthnDialog: false };

  openA2HSDialog = () => this.setState({ isOpenA2HSDialog: true, open: false });

  closeA2HSDialog = () => this.setState({ isOpenA2HSDialog: false });

  openWebAuthnDialog = () =>
    this.setState({ isOpenWebAuthnDialog: true, open: false });

  closeWebAuthnDialog = () => this.setState({ isOpenWebAuthnDialog: false });

  render() {
    const {
      open,
      authUser: { displayName, uid },
      onOpen,
      onClose,
      signout,
      onSetAuthUser,
      history,
      classes,
    } = this.props;
    const { isOpenA2HSDialog, isOpenWebAuthnDialog } = this.state;
    return (
      <>
        <SwipeableDrawer
          anchor="right"
          open={open}
          onClose={onClose}
          onOpen={onOpen}
        >
          <div tabIndex={0} onClick={onClose} onKeyDown={onClose}>
            <div className={classes.list}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CharIcon name={displayName} />
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemText primary={displayName} />
                </ListItem>
              </List>
              <Divider />
              <List subheader={<ListSubheader>メニュー</ListSubheader>}>
                <ListItem onClick={() => history.push(ROUTES.Menu)} button>
                  <ListItemIcon>
                    <HomeRounded />
                  </ListItemIcon>
                  <ListItemText primary="ホーム" />
                </ListItem>
                <ListItem
                  onClick={() =>
                    history.push(
                      `${ROUTES.Menu}?tab=${MENU_ITEMS.NEW_EVENT.title}`,
                    )
                  }
                  button
                >
                  <ListItemIcon>
                    <AddBoxRounded />
                  </ListItemIcon>
                  <ListItemText primary="イベント作成" />
                </ListItem>
                <ListItem
                  onClick={() =>
                    history.push(
                      `${ROUTES.Menu}?tab=${MENU_ITEMS.NOTIFICATION.title}`,
                    )
                  }
                  button
                >
                  <ListItemIcon>
                    <NotificationsRounded />
                  </ListItemIcon>
                  <ListItemText primary="通知一覧" />
                </ListItem>
              </List>
              <Divider />
              <List subheader={<ListSubheader>設定</ListSubheader>}>
                <ListItem
                  onClick={() => history.push(ROUTES.SettingsAccount)}
                  button
                >
                  <ListItemIcon>
                    <AccountBox />
                  </ListItemIcon>
                  <ListItemText primary="アカウント設定" />
                </ListItem>
                <ListItem
                  onClick={() => history.push(ROUTES.SettingsNotification)}
                  button
                >
                  <ListItemIcon>
                    <NotificationsNoneRounded />
                  </ListItemIcon>
                  <ListItemText primary="通知設定" />
                </ListItem>
              </List>
              <Divider />
              <List subheader={<ListSubheader>その他</ListSubheader>}>
                <ListItem onClick={this.openA2HSDialog} button>
                  <ListItemIcon>
                    <GetAppRounded />
                  </ListItemIcon>
                  <ListItemText primary="ホーム画面に追加" />
                </ListItem>
                <ListItem onClick={this.openWebAuthnDialog} button disabled>
                  <ListItemIcon>
                    <Fingerprint />
                  </ListItemIcon>
                  <ListItemText primary="生体認証(β版)" />
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem
                  onClick={() => {
                    localStorage.removeItem('authUser');
                    onSetAuthUser(null);
                    signout();
                  }}
                  button
                >
                  <ListItemIcon>
                    <ExitToApp />
                  </ListItemIcon>
                  <ListItemText primary="ログアウト" />
                </ListItem>
              </List>
            </div>
          </div>
        </SwipeableDrawer>
        <A2HSDialog open={isOpenA2HSDialog} onClose={this.closeA2HSDialog} />
        <WebAuthnDialog
          open={isOpenWebAuthnDialog}
          onClose={this.closeWebAuthnDialog}
          uid={uid}
        />
      </>
    );
  }
}

SideMenu.displayName = 'SideMenu';

SideMenu.propTypes = {
  open: propTypes.bool.isRequired,
  authUser: propTypes.shape({
    displayName: propTypes.string.isRequired,
    uid: propTypes.string.isRequired,
  }),
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

const mapDispatchToProps = dispatch => ({
  onSetAuthUser: authUser => dispatch(setAuthUser(authUser)),
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(SideMenu));
