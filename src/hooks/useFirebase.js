import { useContext } from 'react';

import { FirebaseContext } from 'src/context/firebase';

function useFirebase() {
  return useContext(FirebaseContext);
}

export default useFirebase;
