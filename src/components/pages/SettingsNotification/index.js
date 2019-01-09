import React from 'react';
import propTypes from 'prop-types';
import Container from 'src/components/templates/Container';

const SettingsNotification = ({ createEvent, authUser, history, firebase }) => {
  return (
    <Container title="プッシュ通知" back authUser={authUser} history={history} firebase={firebase}>
      <p />
    </Container>
  );
};

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
