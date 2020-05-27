import React from 'react';
import { useQuery } from '@apollo/client';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from 'src/context/firebase';
import { setAuthUser } from 'src/modules/session';
import query from 'src/graphql/query';
import Signin from 'src/components/pages/Signin';

const mapDispatchToProps = dispatch => ({
  onSetAuthUser: authUser => dispatch(setAuthUser(authUser)),
});

const WithSignin = compose(
  withFirebase,
  connect(null, mapDispatchToProps),
)(Signin);

function SigninContainer() {
  const history = useHistory();
  const { data, loading, error, refetch } = useQuery(query.fetchUser);
  return (
    <WithSignin
      history={history}
      fetchUser={{ ...data, loading, error, refetch }}
    />
  );
}

export default SigninContainer;
