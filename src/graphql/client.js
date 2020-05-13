import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import api from 'src/constants/api';

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: api.graphqlServer,
  }),
  onError: ({ graphQLErrors, networkError }) => {
    if (graphQLErrors) console.log(graphQLErrors);
    if (networkError) console.log(networkError);
  },
});
