import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { compose } from 'recompose';
import { useHistory } from 'react-router-dom';

import useFirebase from 'src/hooks/useFirebase';
import useAuthUser from 'src/hooks/useAuthUser';
import { withAuthorization } from 'src/hoc/Sessions';
import query from 'src/graphql/query';
import mutation from 'src/graphql/mutation';
import SettingsAccount from 'src/components/pages/SettingsAccount';

const WithSettingsAccount = compose(withAuthorization)(
  SettingsAccountContainer,
);

function SettingsAccountContainer(props) {
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

export default WithSettingsAccount;
