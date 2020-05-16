import React from 'react';
import { useMutation } from '@apollo/client';
import { compose } from 'recompose';
import { useHistory } from 'react-router-dom';

import { withFirebase } from 'src/context/firebase';
import { withAuthorization } from 'src/hoc/Sessions';
import mutation from 'src/graphql/mutation';
import NewEvent from 'src/components/pages/NewEvent/';

const WithNewEvent = compose(withAuthorization, withFirebase)(NewEvent);

function NewEventContainer() {
  const history = useHistory();
  const [createEvent] = useMutation(mutation.createEvent);
  return <WithNewEvent history={history} createEvent={createEvent} />;
}

export default NewEventContainer;
