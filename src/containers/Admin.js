import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { useMutation } from '@apollo/client';

import { withFirebase } from 'src/context/firebase';
import mutation from 'src/graphql/mutation';
import Admin from 'src/components/pages/Admin';

const WithAdmin = compose(withFirebase, withRouter)(Admin);

function AdminContainer(props) {
  const [publishNotification] = useMutation(mutation.publishNotification);
  const [registerNotification] = useMutation(mutation.registerNotification);
  const [excuteUpdateExternalEvents] = useMutation(
    mutation.excuteUpdateExternalEvents,
  );
  return (
    <WithAdmin
      {...props}
      publishNotification={publishNotification}
      registerNotification={registerNotification}
      excuteUpdateExternalEvents={excuteUpdateExternalEvents}
    />
  );
}

export default AdminContainer;
