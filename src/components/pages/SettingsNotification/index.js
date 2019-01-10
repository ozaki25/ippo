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
    const allowNotification = notifications.isGranted();
    const unsuppored = !notifications.isSupported();
    this.state = { checked: allowNotification, unsuppored };
  }

  toggleNotificationPermission = () =>
    this.setState(prevState => ({ checked: !prevState.checked }));

  render() {
    const { authUser, history, firebase } = this.props;
    const { checked, unsuppored } = this.state;
    return (
      <Container title="通知設定" back authUser={authUser} history={history} firebase={firebase}>
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
  firebase: propTypes.object.isRequired,
  notifications: propTypes.object.isRequired,
};

SettingsNotification.defaultProps = {};

export default SettingsNotification;
