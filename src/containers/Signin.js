import React from 'react';
import { useQuery } from '@apollo/client';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from 'src/context/firebase';
import { setAuthUser } from 'src/modules/session';
import query from 'src/graphql/query';
import Signin from 'src/components/pages/Signin';

const mapStateToProps = state => ({
  rawId: state.webauth.rawId,
  uid: state.webauth.uid,
});

const mapDispatchToProps = dispatch => ({
  onSetAuthUser: authUser => dispatch(setAuthUser(authUser)),
});

const WithSignin = compose(
  withRouter,
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps),
)(Signin);

function SigninContainer() {
  const { data, loading, error, refetch } = useQuery(query.fetchUser);
  return <WithSignin fetchUser={{ ...data, loading, error, refetch }} />;
}

export default SigninContainer;
