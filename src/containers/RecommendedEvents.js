import React from 'react';
import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import useFirebase from 'src/hooks/useFirebase';
import useAuthorization from 'src/hooks/useAuthorization';
import paging from 'src/constants/paging';
import query from 'src/graphql/query';
import RecommendedEvents from 'src/components/pages/RecommendedEvents/';

function RecommendedEventsContainer(props) {
  useAuthorization();
  const { uid } = props.authUser;
  const history = useHistory();
  const firebase = useFirebase();
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
      firebase={firebase}
      data={{ ...data, loading, error, fetchMore }}
    />
  );
}

export default RecommendedEventsContainer;
