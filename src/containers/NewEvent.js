import React from 'react';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import useFirebase from 'src/hooks/useFirebase';
import useAuthorization from 'src/hooks/useAuthorization';
import mutation from 'src/graphql/mutation';
import NewEvent from 'src/components/pages/NewEvent/';

function NewEventContainer() {
  useAuthorization();
  const history = useHistory();
  const firebase = useFirebase();
  const [createEvent] = useMutation(mutation.createEvent);
  return (
    <NewEvent history={history} firebase={firebase} createEvent={createEvent} />
  );
}

export default NewEventContainer;
