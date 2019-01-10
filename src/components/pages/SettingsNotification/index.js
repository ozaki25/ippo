import React from 'react';
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Switch,
  Typography,
} from '@material-ui/core';
import propTypes from 'prop-types';
import Container from 'src/components/templates/Container';

class SettingsNotification extends React.Component {
  constructor(props) {
    super(props);
    const { notifications } = props;
    const granted = notifications.isGranted();
    const denied = notifications.isDenied();
    const unsuppored = !notifications.isSupported();
    this.state = { checked: granted, unsuppored, denied };
  }

  toggleNotificationPermission = async () => {
    const { firebase, notifications, registerNotification, unregisterNotification } = this.props;
    const { checked } = this.state;
    try {
      const token = await firebase.askForPermissionToReceiveNotifications();
      console.log(token);
      if (!checked) {
        this.setState({ checked: notifications.isGranted(), denied: notifications.isDenied() });
        registerNotification({ variables: { token } });
      } else {
        this.setState({ checked: false });
        unregisterNotification({ variables: { token } });
      }
    } catch (e) {
      if (e.code === 'messaging/permission-blocked') {
        const token = await firebase.askForPermissionToReceiveNotifications();
        this.setState({ checked: false, denied: true });
        unregisterNotification({ variables: { token } });
      }
      console.log(e);
    }
  };

  render() {
    const { authUser, history, firebase } = this.props;
    const { checked, denied, unsuppored } = this.state;
    return (
      <Container title="通知設定" back authUser={authUser} history={history} firebase={firebase}>
        {denied ? (
          <>
            <Typography variant="h5">権限がありません</Typography>
            <Typography>プッシュ通知の受信が拒否されています</Typography>
            <Typography>ブラウザの設定を確認して下さい</Typography>
          </>
        ) : (
          <List>
            <ListItem>
              <ListItemText
                primary="プッシュ通知"
                secondary="おすすめのイベントや参加イベントのリマインドを受け取ることができます"
              />
              <ListItemSecondaryAction>
                <Switch
                  onChange={this.toggleNotificationPermission}
                  checked={checked}
                  color="primary"
                  disabled={unsuppored}
                />
              </ListItemSecondaryAction>
            </ListItem>
            {unsuppored && (
              <Typography color="error">
                お使いのブラウザはプッシュ通知に対応しておりません。
              </Typography>
            )}
          </List>
        )}
      </Container>
    );
  }
}
SettingsNotification.displayName = 'SettingsNotification';

SettingsNotification.propTypes = {
  authUser: propTypes.shape({
    displayName: propTypes.string.isRequired,
    uid: propTypes.string.isRequired,
  }).isRequired,
  history: propTypes.shape({
    push: propTypes.func.isRequired,
    goBack: propTypes.func.isRequired,
    replace: propTypes.func.isRequired,
  }).isRequired,
  firebase: propTypes.shape({
    askForPermissionToReceiveNotifications: propTypes.func.isRequired,
  }).isRequired,
  notifications: propTypes.object.isRequired,
  registerNotification: propTypes.func.isRequired,
  unregisterNotification: propTypes.func.isRequired,
};

SettingsNotification.defaultProps = {};

export default SettingsNotification;
