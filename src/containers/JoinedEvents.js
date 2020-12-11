import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { compose } from 'recompose';

import { withAuthorization } from 'src/hoc/Sessions';
import useFirebase from 'src/hooks/useFirebase';
import paging from 'src/constants/paging';
import query from 'src/graphql/query';
import JoinedEvents from 'src/components/pages/JoinedEvents/';

const WithJoinedEvents = compose(withAuthorization)(JoinedEventsContainer);

function JoinedEventsContainer(props) {
  const { uid } = props.authUser;
  const history = useHistory();
  const firebase = useFirebase();
  const { data, loading, error, fetchMore } = useQuery(query.joinedEvents, {
    variables: { uid, limit: paging.eventsPerPage },
  });
  return (
    <JoinedEvents
      {...props}
      history={history}
      firebase={firebase}
      data={{ ...data, loading, error, fetchMore }}
    />
  );
}

export default WithJoinedEvents;
