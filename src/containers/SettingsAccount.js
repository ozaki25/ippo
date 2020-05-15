import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { connect } from 'react-redux';
import { graphql } from '@apollo/react-hoc';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

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
  withRouter,
  withFirebase,
  graphql(query.fetchUser, {
    options: ({ authUser: { uid } }) => ({ variables: { uid } }),
  }),
  graphql(mutation.createUser, { name: 'updateUser' }),
)(SettingsAccountContainer);

function SettingsAccountContainer(props) {
  const { uid } = props.authUser;
  const { data, loading, error, refetch } = useQuery(query.fetchUser, {
    variables: { uid },
  });
  const [updateUser] = useMutation(mutation.createUser);
  return (
    <SettingsAccount
      {...props}
      updateUser={updateUser}
      data={{ ...data, loading, error, refetch }}
    />
  );
}

export default WithSettingsAccount;
