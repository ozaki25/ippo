import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import useFirebase from 'src/hooks/useFirebase';
import useAuthorization from 'src/hooks/useAuthorization';
import query from 'src/graphql/query';
import ExternalEvents from 'src/components/pages/ExternalEvents';

function ExternalEventsContainer(props) {
  useAuthorization();
  const history = useHistory();
  const firebase = useFirebase();
  const { data, loading, error, fetchMore } = useQuery(query.externalEvents);
  return (
    <ExternalEvents
      {...props}
      history={history}
      firebase={firebase}
      data={{ ...data, loading, error, fetchMore }}
    />
  );
}

export default ExternalEventsContainer;
