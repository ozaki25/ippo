import React from 'react';
import { useHistory } from 'react-router-dom';

import useFirebase from 'src/hooks/useFirebase';
import Signin from 'src/components/pages/Signin';

function SigninContainer() {
  const history = useHistory();
  const firebase = useFirebase();
  return <Signin history={history} firebase={firebase} />;
}

export default SigninContainer;
