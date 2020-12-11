import React, { createContext } from 'react';
import Firebase from 'src/utils/firebase';

export const FirebaseContext = createContext(null);

export function FirebaseProvider(props) {
  return <FirebaseContext.Provider {...props} value={new Firebase()} />;
}

export default FirebaseContext;

// TODO:WithAuthnが消えたら消えす
export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);
