import React from 'react';
import { useHistory } from 'react-router-dom';
import { compose } from 'recompose';
import { useMutation } from '@apollo/client';

import { withFirebase } from 'src/context/firebase';
import mutation from 'src/graphql/mutation';
import Admin from 'src/components/pages/Admin';

const WithAdmin = compose(withFirebase)(Admin);

function AdminContainer(props) {
  const history = useHistory();
  const [publishNotification] = useMutation(mutation.publishNotification);
  const [registerNotification] = useMutation(mutation.registerNotification);
  const [excuteUpdateExternalEvents] = useMutation(
    mutation.excuteUpdateExternalEvents,
  );
  return (
    <WithAdmin
      {...props}
      history={history}
      publishNotification={publishNotification}
      registerNotification={registerNotification}
      excuteUpdateExternalEvents={excuteUpdateExternalEvents}
    />
  );
}

export default AdminContainer;
