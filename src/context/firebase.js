import React from 'react';
import { createContext } from 'react';

export const FirebaseContext = createContext(null);

export const FirebaseProvider = FirebaseContext.Provider;

export default FirebaseContext;

// TODO:WithAuthnが消えたら消えす
export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);
