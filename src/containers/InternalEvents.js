import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { compose } from 'recompose';

import { withFirebase } from 'src/context/firebase';
import { withAuthorization } from 'src/hoc/Sessions';
import query from 'src/graphql/query';
import InternalEvents from 'src/components/pages/InternalEvents/';

const WithInternalEvents = compose(
  withAuthorization,
  withFirebase,
)(InternalEvents);

function InternalEventsContainer() {
  const history = useHistory();
  const { data, loading, error, fetchMore } = useQuery(query.internalEvents);
  return (
    <WithInternalEvents
      history={history}
      data={{ ...data, loading, error, fetchMore }}
    />
  );
}

export default InternalEventsContainer;
