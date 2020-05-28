import { useContext } from 'react';
import AuthUserContext from 'src/context/authUser';

function useAuthUser() {
  const { authUser, setAuthUser } = useContext(AuthUserContext);
  console.log({ authUser, setAuthUser });
  return { authUser, setAuthUser };
}

export default useAuthUser;
