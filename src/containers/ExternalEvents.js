import React from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { compose } from 'recompose';

import { withFirebase } from 'src/context/firebase';
import { withAuthorization } from 'src/hoc/Sessions';
import query from 'src/graphql/query';
import ExternalEvents from 'src/components/pages/ExternalEvents';

const WithExternalEvents = compose(
  withAuthorization,
  withRouter,
  withFirebase,
)(ExternalEvents);

function ExternalEventsContainer(props) {
  const { data, loading, error, fetchMore } = useQuery(query.externalEvents);
  return (
    <WithExternalEvents
      {...props}
      data={{ ...data, loading, error, fetchMore }}
    />
  );
}

export default ExternalEventsContainer;
