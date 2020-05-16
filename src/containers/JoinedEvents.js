import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { compose } from 'recompose';

import { withAuthorization } from 'src/hoc/Sessions';
import { withFirebase } from 'src/context/firebase';
import paging from 'src/constants/paging';
import query from 'src/graphql/query';
import JoinedEvents from 'src/components/pages/JoinedEvents/';

const WithJoinedEvents = compose(
  withAuthorization,
  withFirebase,
)(JoinedEventsContainer);

function JoinedEventsContainer(props) {
  const { uid } = props.authUser;
  const history = useHistory();
  const { data, loading, error, fetchMore } = useQuery(query.joinedEvents, {
    variables: { uid, limit: paging.eventsPerPage },
  });
  return (
    <JoinedEvents
      {...props}
      history={history}
      data={{ ...data, loading, error, fetchMore }}
    />
  );
}

export default WithJoinedEvents;
