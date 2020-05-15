import React from 'react';
import { useMutation } from '@apollo/client';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import { withFirebase } from 'src/context/firebase';
import { withAuthorization } from 'src/hoc/Sessions';
import mutation from 'src/graphql/mutation';
import NewEvent from 'src/components/pages/NewEvent/';

const WithNewEvent = compose(
  withAuthorization,
  withRouter,
  withFirebase,
)(NewEvent);

function NewEventContainer() {
  const [createEvent] = useMutation(mutation.createEvent);
  return <WithNewEvent createEvent={createEvent} />;
}

export default NewEventContainer;
