import React from 'react';
import { useQuery } from '@apollo/client';
import { compose } from 'recompose';
import { useHistory } from 'react-router-dom';

import { withFirebase } from 'src/context/firebase';
import { withAuthorization } from 'src/hoc/Sessions';
import paging from 'src/constants/paging';
import query from 'src/graphql/query';
import OrganizedEvents from 'src/components/pages/OrganizedEvents/';

const WithOrganizedEvents = compose(
  withAuthorization,
  withFirebase,
)(OrganizedEventsContainer);

function OrganizedEventsContainer(props) {
  const { uid } = props.authUser;
  const history = useHistory();
  const { data, loading, error, fetchMore } = useQuery(query.organizedEvents, {
    variables: { uid, limit: paging.eventsPerPage },
  });
  return (
    <OrganizedEvents
      {...props}
      history={history}
      data={{ ...data, loading, error, fetchMore }}
    />
  );
}

export default WithOrganizedEvents;
