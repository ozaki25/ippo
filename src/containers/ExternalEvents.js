import React from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'src/context/firebase';
import ExternalEvents from 'src/components/pages/ExternalEvents/';
import { withAuthorization } from 'src/hoc/Sessions';
import useExternalEventsQuery from 'src/hooks/useExternalEventsQuery';

const WithExternalEvents = compose(
  withAuthorization,
  withRouter,
  withFirebase,
)(ExternalEvents);

function ExternalEventsContainer(props) {
  const { data } = useExternalEventsQuery();
  console.log({ data });
  return <WithExternalEvents {...props} data={data} />;
}

export default ExternalEventsContainer;
