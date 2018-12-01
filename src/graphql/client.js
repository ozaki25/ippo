import ApolloClient from 'apollo-boost';
import api from 'src/constants/api';

export default new ApolloClient({
  uri: api.graphqlServer,
  onError: ({ graphQLErrors, networkError }) => {
    if (graphQLErrors) console.log(graphQLErrors);
    if (networkError) console.log(networkError);
  },
});
