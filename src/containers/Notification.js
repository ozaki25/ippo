import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { compose } from 'recompose';
import { useHistory } from 'react-router-dom';

import useFirebase from 'src/hooks/useFirebase';
import { withAuthorization } from 'src/hoc/Sessions';
import query from 'src/graphql/query';
import mutation from 'src/graphql/mutation';
import Notification from 'src/components/pages/Notification';

const WithNotification = compose(withAuthorization)(NotificationContainer);

function NotificationContainer(props) {
  const { uid } = props.authUser;
  const history = useHistory();
  const firebase = useFirebase();
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
      history={history}
      firebase={firebase}
      readNotification={readNotification}
      user={{ ...data, loading, error, refetch, variables }}
    />
  );
}

export default WithNotification;
