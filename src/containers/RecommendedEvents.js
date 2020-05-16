import React from 'react';
import { useQuery } from '@apollo/client';
import { compose } from 'recompose';
import { useHistory } from 'react-router-dom';

import { withFirebase } from 'src/context/firebase';
import { withAuthorization } from 'src/hoc/Sessions';
import paging from 'src/constants/paging';
import query from 'src/graphql/query';
import RecommendedEvents from 'src/components/pages/RecommendedEvents/';

const WithRecommendedEvents = compose(
  withAuthorization,
  withFirebase,
)(RecommendedEventsContainer);

function RecommendedEventsContainer(props) {
  const { uid } = props.authUser;
  const history = useHistory();
  const { data, loading, error, fetchMore } = useQuery(
    query.recommendedEvents,
    {
      variables: { uid, limit: paging.eventsPerPage },
    },
  );

  return (
    <RecommendedEvents
      {...props}
      history={history}
      data={{ ...data, loading, error, fetchMore }}
    />
  );
}

export default WithRecommendedEvents;
