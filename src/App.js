import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import Router from './router';
import client from 'src/graphql/client';
import store from 'src/modules/createStore';
import Firebase from 'src/utils/firebase';
import FirebaseContext from 'src/context/firebase';
import { withAuthentication } from 'src/hoc/Sessions';

const AuthRouter = withAuthentication(Router);

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <FirebaseContext.Provider value={new Firebase()}>
        <AuthRouter />
      </FirebaseContext.Provider>
    </Provider>
  </ApolloProvider>
);

export default App;
