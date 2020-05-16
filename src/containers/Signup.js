import React from 'react';
import { useHistory } from 'react-router-dom';
import { withFirebase } from 'src/context/firebase';
import { compose } from 'recompose';
import Signup from 'src/components/pages/Signup';

const WithSignup = compose(withFirebase)(Signup);

function SignupContainer() {
  const history = useHistory();
  return <WithSignup history={history} />;
}

export default SignupContainer;
