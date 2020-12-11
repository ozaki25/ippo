import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import useFirebase from 'src/hooks/useFirebase';
import mutation from 'src/graphql/mutation';
import Admin from 'src/components/pages/Admin';

function AdminContainer(props) {
  const history = useHistory();
  const firebase = useFirebase();
  const [publishNotification] = useMutation(mutation.publishNotification);
  const [registerNotification] = useMutation(mutation.registerNotification);
  const [excuteUpdateExternalEvents] = useMutation(
    mutation.excuteUpdateExternalEvents,
  );
  return (
    <Admin
      {...props}
      history={history}
      firebase={firebase}
      publishNotification={publishNotification}
      registerNotification={registerNotification}
      excuteUpdateExternalEvents={excuteUpdateExternalEvents}
    />
  );
}

export default AdminContainer;
