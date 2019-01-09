import React from 'react';
import { List, ListItem, ListItemSecondaryAction, ListItemText, Switch } from '@material-ui/core';
import propTypes from 'prop-types';
import Container from 'src/components/templates/Container';

class SettingsNotification extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  toggleNotificationPermission = () =>
    this.setState(prevState => ({ checked: !prevState.checked }));

  render() {
    const { authUser, history, firebase } = this.props;
    const { checked } = this.state;
    return (
      <Container title="通知設定" back authUser={authUser} history={history} firebase={firebase}>
        <List>
          <ListItem>
            <ListItemText
              primary="プッシュ通知"
              secondary="おすすめのイベントや参加イベントのリマインドの通知を受け取ることができます"
            />
            <ListItemSecondaryAction>
              <Switch
                onChange={this.toggleNotificationPermission}
                checked={checked}
                color="primary"
              />
            </ListItemSecondaryAction>
          </ListItem>
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
};

SettingsNotification.defaultProps = {};

export default SettingsNotification;
