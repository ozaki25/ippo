import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { compose } from 'recompose';

import useFirebase from 'src/hooks/useFirebase';
import { withAuthorization } from 'src/hoc/Sessions';
import query from 'src/graphql/query';
import InternalEvents from 'src/components/pages/InternalEvents/';

const WithInternalEvents = compose(withAuthorization)(InternalEvents);

function InternalEventsContainer() {
  const history = useHistory();
  const firebase = useFirebase();
  const { data, loading, error, fetchMore } = useQuery(query.internalEvents);
  return (
    <WithInternalEvents
      history={history}
      firebase={firebase}
      data={{ ...data, loading, error, fetchMore }}
    />
  );
}

export default InternalEventsContainer;
