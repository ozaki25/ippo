import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import useFirebase from 'src/hooks/useFirebase';
import useAuthUser from 'src/hooks/useAuthUser';
import useAuthorization from 'src/hooks/useAuthorization';
import query from 'src/graphql/query';
import mutation from 'src/graphql/mutation';
import SettingsAccount from 'src/components/pages/SettingsAccount';

function SettingsAccountContainer(props) {
  useAuthorization();
  const { uid } = props.authUser;
  const history = useHistory();
  const firebase = useFirebase();
  const { setAuthUser } = useAuthUser();
  const { data, loading, error, refetch } = useQuery(query.fetchUser, {
    variables: { uid },
  });
  const [updateUser] = useMutation(mutation.createUser);
  return (
    <SettingsAccount
      {...props}
      history={history}
      firebase={firebase}
      setAuthUser={setAuthUser}
      updateUser={updateUser}
      data={{ ...data, loading, error, refetch }}
    />
  );
}

export default SettingsAccountContainer;
