import React from 'react';
import { ApolloProvider } from 'react-apollo';
import Router from './router';
import client from 'src/graphql/client';
import Firebase from 'src/utils/firebase';
import FirebaseContext from 'src/context/firebase';

const App = () => (
  <ApolloProvider client={client}>
    <FirebaseContext.Provider value={new Firebase()}>
      <Router />
    </FirebaseContext.Provider>
  </ApolloProvider>
);

export default App;
