import React from 'react';
import { List } from '@material-ui/core';
import propTypes from 'prop-types';
import ListItemUtil from 'src/components/molecules/ListItemUtil';
import Container from 'src/components/templates/Container';

class SettingsAccount extends React.Component {
  render() {
    const { authUser, history, firebase } = this.props;
    return (
      <Container
        title="アカウント設定"
        back
        authUser={authUser}
        history={history}
        firebase={firebase}
      >
        <List>
          <ListItemUtil primary="...準備中" />
        </List>
      </Container>
    );
  }
}

SettingsAccount.displayName = 'SettingsAccount';

SettingsAccount.propTypes = {
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

SettingsAccount.defaultProps = {};

export default SettingsAccount;
