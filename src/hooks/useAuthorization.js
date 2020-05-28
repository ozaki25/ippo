import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useAuthUser from 'src/hooks/useAuthUser';
import useFirebase from 'src/hooks/useFirebase';

import ROUTES from 'src/constants/routes';

function useAuthorization() {
  const history = useHistory();
  const { authUser } = useAuthUser();
  const firebase = useFirebase();

  useEffect(() => {
    const listener = firebase.onAuthUserListener(
      authUser => !authUser && history.push(ROUTES.Signin),
      () => {
        if (!authUser) history.push(ROUTES.Signin);
      },
    );
    return listener();
  }, [authUser, firebase, history]);
  return;
}

export default useAuthorization;
