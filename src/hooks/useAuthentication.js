import { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import useAuthUser from 'src/hooks/useAuthUser';
import useFirebase from 'src/hooks/useFirebase';
import query from 'src/graphql/query';
import mutation from 'src/graphql/mutation';

function useAuthentication() {
  const firebase = useFirebase();
  const { authUser, setAuthUser } = useAuthUser();
  const { refetch } = useQuery(query.fetchUser);
  const [createUser] = useMutation(mutation.createUser);

  useEffect(() => {
    const saveUserToLocal = user => {
      localStorage.setItem('authUser', JSON.stringify(user));
      setAuthUser(user);
    };

    const signinWithGoogle = async ({ uid, displayName }) => {
      const {
        data: { fetchUser },
      } = await refetch({ uid });
      const user = fetchUser.uid ? fetchUser : { uid, displayName };
      // 新規ユーザであればDB登録
      if (!fetchUser.uid) this.props.createUser({ variables: { user } });
      saveUserToLocal(user);
      // 登録前の状態でキャッシュが残るのでrefetchしておく
      refetch({ uid });
    };

    const signupWithEmail = async ({ uid, name, categories }) => {
      const user = { uid, displayName: name, categories };
      saveUserToLocal(user);
      await createUser({ variables: { user } });
      // 登録後のデータを取得しておく
      await refetch({ uid });
    };

    const signinWithEmail = async ({ uid }) => {
      const {
        data: { fetchUser },
      } = await refetch({ uid });
      saveUserToLocal(fetchUser);
    };

    const listener = firebase.onAuthUserListener(
      async ({ uid, displayName }) => {
        if (authUser) return;
        if (uid && displayName) signinWithGoogle({ uid, displayName });
        if (!displayName) {
          const storage = JSON.parse(sessionStorage.getItem('authUser'));
          sessionStorage.removeItem('authUser');
          if (storage && storage.name) {
            signupWithEmail({ ...storage, uid });
          } else {
            signinWithEmail({ uid });
          }
        }
      },
      () => {
        localStorage.removeItem('authUser');
        setAuthUser(null);
      },
    );
    return listener();
  }, [firebase, authUser, setAuthUser, refetch, createUser]);
}

export default useAuthentication;
