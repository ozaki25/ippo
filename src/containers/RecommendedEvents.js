import React from 'react';
import { useQuery } from '@apollo/client';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import { withFirebase } from 'src/context/firebase';
import { withAuthorization } from 'src/hoc/Sessions';
import paging from 'src/constants/paging';
import query from 'src/graphql/query';
import RecommendedEvents from 'src/components/pages/RecommendedEvents/';

const WithRecommendedEvents = compose(
  withAuthorization,
  withRouter,
  withFirebase,
)(RecommendedEventsContainer);

function RecommendedEventsContainer(props) {
  const { uid } = props.authUser;
  const { data, loading, error, fetchMore } = useQuery(
    query.recommendedEvents,
    {
      variables: { uid, limit: paging.eventsPerPage },
    },
  );

  return (
    <RecommendedEvents
      {...props}
      data={{ ...data, loading, error, fetchMore }}
    />
  );
}

export default WithRecommendedEvents;
