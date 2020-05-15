import React from 'react';
import { useMutation } from '@apollo/client';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import { withFirebase } from 'src/context/firebase';
import { withAuthorization } from 'src/hoc/Sessions';
import withNotification from 'src/hoc/withNotification';
import mutation from 'src/graphql/mutation';
import SettingsNotification from 'src/components/pages/SettingsNotification/';

const WithSettingsNotification = compose(
  withAuthorization,
  withRouter,
  withFirebase,
  withNotification,
)(SettingsNotification);

function SettingsNotificationContainer() {
  const [registerNotification] = useMutation(mutation.registerNotification);
  const [unregisterNotification] = useMutation(mutation.unregisterNotification);
  return (
    <WithSettingsNotification
      registerNotification={registerNotification}
      unregisterNotification={unregisterNotification}
    />
  );
}

export default SettingsNotificationContainer;
