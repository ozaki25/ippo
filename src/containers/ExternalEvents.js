import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { compose } from 'recompose';

import useFirebase from 'src/hooks/useFirebase';
import { withAuthorization } from 'src/hoc/Sessions';
import query from 'src/graphql/query';
import ExternalEvents from 'src/components/pages/ExternalEvents';

const WithExternalEvents = compose(withAuthorization)(ExternalEvents);

function ExternalEventsContainer(props) {
  const history = useHistory();
  const firebase = useFirebase();
  const { data, loading, error, fetchMore } = useQuery(query.externalEvents);
  return (
    <WithExternalEvents
      {...props}
      history={history}
      firebase={firebase}
      data={{ ...data, loading, error, fetchMore }}
    />
  );
}

export default ExternalEventsContainer;
