import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import { withFirebase } from 'src/context/firebase';
import { withAuthorization } from 'src/hoc/Sessions';
import query from 'src/graphql/query';
import mutation from 'src/graphql/mutation';
import Notification from 'src/components/pages/Notification';

const WithNotification = compose(
  withAuthorization,
  withRouter,
  withFirebase,
)(NotificationContainer);

function NotificationContainer(props) {
  const { uid } = props.authUser;
  const { data, loading, error, refetch, variables } = useQuery(
    query.fetchUser,
    {
      variables: { uid },
    },
  );
  const [readNotification] = useMutation(mutation.readNotification);
  return (
    <Notification
      {...props}
      readNotification={readNotification}
      user={{ ...data, loading, error, refetch, variables }}
    />
  );
}

export default WithNotification;
