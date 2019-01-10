import React from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'src/context/firebase';
import SettingsNotification from 'src/components/pages/SettingsNotification/';
import { withAuthorization } from 'src/hoc/Sessions';
import notifications from 'src/utils/notifications';

const withNotification = Component => ({ ...props }) => (
  <Component {...props} notifications={notifications} />
);

export default compose(
  withAuthorization,
  withRouter,
  withFirebase,
  withNotification,
)(SettingsNotification);
