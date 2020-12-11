import React from 'react';
import { useMutation } from '@apollo/client';
import { compose } from 'recompose';
import { useHistory } from 'react-router-dom';

import useFirebase from 'src/hooks/useFirebase';
import { withAuthorization } from 'src/hoc/Sessions';
import mutation from 'src/graphql/mutation';
import NewEvent from 'src/components/pages/NewEvent/';

const WithNewEvent = compose(withAuthorization)(NewEvent);

function NewEventContainer() {
  const history = useHistory();
  const firebase = useFirebase();
  const [createEvent] = useMutation(mutation.createEvent);
  return (
    <WithNewEvent
      history={history}
      firebase={firebase}
      createEvent={createEvent}
    />
  );
}

export default NewEventContainer;
