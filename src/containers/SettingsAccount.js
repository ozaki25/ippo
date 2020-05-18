import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { useHistory } from 'react-router-dom';

import { withFirebase } from 'src/context/firebase';
import { withAuthorization } from 'src/hoc/Sessions';
import { setAuthUser } from 'src/modules/session';
import query from 'src/graphql/query';
import mutation from 'src/graphql/mutation';
import SettingsAccount from 'src/components/pages/SettingsAccount';

const mapDispatchToProps = dispatch => ({
  onSetAuthUser: authUser => dispatch(setAuthUser(authUser)),
});

const WithSettingsAccount = compose(
  connect(null, mapDispatchToProps),
  withAuthorization,
  withFirebase,
)(SettingsAccountContainer);

function SettingsAccountContainer(props) {
  const { uid } = props.authUser;
  const history = useHistory();
  const { data, loading, error, refetch } = useQuery(query.fetchUser, {
    variables: { uid },
  });
  const [updateUser] = useMutation(mutation.createUser);
  return (
    <SettingsAccount
      {...props}
      history={history}
      updateUser={updateUser}
      data={{ ...data, loading, error, refetch }}
    />
  );
}

export default WithSettingsAccount;
