import React from 'react';
import { useQuery } from '@apollo/client';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { compose } from 'recompose';

import useFirebase from 'src/hooks/useFirebase';
import { setAuthUser } from 'src/modules/session';
import query from 'src/graphql/query';
import Signin from 'src/components/pages/Signin';

const mapDispatchToProps = dispatch => ({
  onSetAuthUser: authUser => dispatch(setAuthUser(authUser)),
});

const WithSignin = compose(connect(null, mapDispatchToProps))(Signin);

function SigninContainer() {
  const history = useHistory();
  const firebase = useFirebase();
  const { data, loading, error, refetch } = useQuery(query.fetchUser);
  return (
    <WithSignin
      history={history}
      firebase={firebase}
      fetchUser={{ ...data, loading, error, refetch }}
    />
  );
}

export default SigninContainer;
