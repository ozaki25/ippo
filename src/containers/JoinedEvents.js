import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import useAuthorization from 'src/hooks/useAuthorization';
import useFirebase from 'src/hooks/useFirebase';
import paging from 'src/constants/paging';
import query from 'src/graphql/query';
import JoinedEvents from 'src/components/pages/JoinedEvents/';

function JoinedEventsContainer(props) {
  useAuthorization();
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

export default JoinedEventsContainer;
