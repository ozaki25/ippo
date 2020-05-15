import React from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { compose } from 'recompose';

import { withAuthorization } from 'src/hoc/Sessions';
import { withFirebase } from 'src/context/firebase';
import paging from 'src/constants/paging';
import query from 'src/graphql/query';
import JoinedEvents from 'src/components/pages/JoinedEvents/';

const WithJoinedEvents = compose(
  withAuthorization,
  withRouter,
  withFirebase,
)(JoinedEventsContainer);

function JoinedEventsContainer(props) {
  const { uid } = props.authUser;
  const { data, loading, error, fetchMore } = useQuery(query.joinedEvents, {
    variables: { uid, limit: paging.eventsPerPage },
  });
  return (
    <JoinedEvents {...props} data={{ ...data, loading, error, fetchMore }} />
  );
}

export default WithJoinedEvents;
