import React from 'react';
import { useQuery } from '@apollo/client';
import { compose } from 'recompose';
import { useHistory } from 'react-router-dom';

import useFirebase from 'src/hooks/useFirebase';
import { withAuthorization } from 'src/hoc/Sessions';
import paging from 'src/constants/paging';
import query from 'src/graphql/query';
import OrganizedEvents from 'src/components/pages/OrganizedEvents/';

const WithOrganizedEvents = compose(withAuthorization)(
  OrganizedEventsContainer,
);

function OrganizedEventsContainer(props) {
  const { uid } = props.authUser;
  const history = useHistory();
  const firebase = useFirebase();
  const { data, loading, error, fetchMore } = useQuery(query.organizedEvents, {
    variables: { uid, limit: paging.eventsPerPage },
  });
  return (
    <OrganizedEvents
      {...props}
      history={history}
      firebase={firebase}
      data={{ ...data, loading, error, fetchMore }}
    />
  );
}

export default WithOrganizedEvents;
