import React from 'react';
import { Divider, List } from '@material-ui/core';
import propTypes from 'prop-types';
import ListItemUtil from 'src/components/molecules/ListItemUtil';
import Container from 'src/components/templates/Container';

class SettingsNotification extends React.Component {
  constructor(props) {
    super(props);
    const { notifications } = props;
    const granted = notifications.isGranted();
    const denied = notifications.isDenied();
    const unsuppored = !notifications.isSupported();
    this.state = {
      granted,
      denied,
      unsuppored,
      allowRecommendedEvent: true,
      allowJoinedEvent: true,
    };
  }

  toggleNotificationPermission = async () => {
    const { firebase, notifications, registerNotification, unregisterNotification } = this.props;
    const { granted } = this.state;

    try {
      const token = await firebase.askForPermissionToReceiveNotifications();
      if (granted) {
        // ON -> OFFの場合
        console.log('ON -> OFF');
        this.setState({ granted: false });
        await unregisterNotification({ variables: { token } });
      } else {
        // OFF -> ONの場合
        console.log('OFF -> ON');
        const granted = notifications.isGranted();
        const denied = notifications.isDenied();
        this.setState({ granted, denied });
        if (granted) await registerNotification({ variables: { token } });
      }
    } catch (e) {
      // ブラウザの通知許可ダイアログで拒否を選んだ時
      if (e.code === 'messaging/permission-blocked') {
        this.setState({ granted: false, denied: true });
      }
      console.log(e);
    }
  };

  toggleRecommendedPermission = () =>
    this.setState(prevState => ({ allowRecommendedEvent: !prevState.allowRecommendedEvent }));

  toggleJoinedPermission = () =>
    this.setState(prevState => ({ allowJoinedEvent: !prevState.allowJoinedEvent }));

  render() {
    const { authUser, history, firebase } = this.props;
    const { granted, denied, unsuppored, allowRecommendedEvent, allowJoinedEvent } = this.state;
    return (
      <Container title="通知設定" back authUser={authUser} history={history} firebase={firebase}>
        <List>
          {denied ? (
            <ListItemUtil
              primary="権限がありません"
              secondary="プッシュ通知の受信が拒否されています。ブラウザの設定を確認して下さい。"
            />
          ) : (
            <>
              <ListItemUtil
                primary="プッシュ通知"
                onChange={this.toggleNotificationPermission}
                checked={granted}
                disabled={unsuppored}
                toggle
              />
              {granted && !unsuppored && (
                <>
                  <Divider variant="middle" light />
                  <ListItemUtil
                    primary="おすすめイベントの通知"
                    secondary="あなたにおすすめのイベントを定期的にお知らせします"
                    onChange={this.toggleRecommendedPermission}
                    checked={allowRecommendedEvent}
                    checkbox
                  />
                  <ListItemUtil
                    primary="参加イベントに関する通知"
                    secondary="参加イベントのリマインドや主催者からの連絡をお知らせします"
                    onChange={this.toggleJoinedPermission}
                    checked={allowJoinedEvent}
                    checkbox
                  />
                  <Divider />
                </>
              )}
              {unsuppored && (
                <ListItemUtil primary="お使いのブラウザはプッシュ通知に対応しておりません" />
              )}
            </>
          )}
        </List>
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
