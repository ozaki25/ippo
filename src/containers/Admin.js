import React from 'react';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'src/context/firebase';
import { compose } from 'recompose';
import Admin from 'src/components/pages/Admin';
import useMutationPublishNotification from 'src/hooks/useMutationPublishNotification';
import useMutationRegisterNotification from 'src/hooks/useMutationRegisterNotification';
import useMutationExcuteUpdateExternalEvents from 'src/hooks/useMutationExcuteUpdateExternalEvents';

const WithAdmin = compose(withFirebase, withRouter)(Admin);

function AdminContainer(props) {
  const [publishNotification] = useMutationPublishNotification();
  const [registerNotification] = useMutationRegisterNotification();
  const [excuteUpdateExternalEvents] = useMutationExcuteUpdateExternalEvents();
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
