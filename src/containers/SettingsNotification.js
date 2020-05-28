import React from 'react';
import { useMutation } from '@apollo/client';
import { compose } from 'recompose';
import { useHistory } from 'react-router-dom';

import useFirebase from 'src/hooks/useFirebase';
import { withAuthorization } from 'src/hoc/Sessions';
import withNotification from 'src/hoc/withNotification';
import mutation from 'src/graphql/mutation';
import SettingsNotification from 'src/components/pages/SettingsNotification/';

const WithSettingsNotification = compose(
  withAuthorization,
  withNotification,
)(SettingsNotification);

function SettingsNotificationContainer() {
  const history = useHistory();
  const firebase = useFirebase();
  const [registerNotification] = useMutation(mutation.registerNotification);
  const [unregisterNotification] = useMutation(mutation.unregisterNotification);
  return (
    <WithSettingsNotification
      history={history}
      firebase={firebase}
      registerNotification={registerNotification}
      unregisterNotification={unregisterNotification}
    />
  );
}

export default SettingsNotificationContainer;
