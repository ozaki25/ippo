import React from 'react';
import { ApolloProvider } from 'react-apollo';
import Router from './router';
import client from 'src/graphql/client';

const App = () => (
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>
);

export default App;
