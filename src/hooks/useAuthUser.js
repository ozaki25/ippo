import { useContext } from 'react';
import AuthUserContext from 'src/context/authUser';

function useAuthUser() {
  const { authUser, setAuthUser } = useContext(AuthUserContext);
  return { authUser, setAuthUser };
}

export default useAuthUser;
