const graphqlServer = process.env.REACT_APP_LOCAL
  ? 'http://localhost:4000/graphql'
  : `${process.env.REACT_APP_API_URL}`;

export default {
  graphqlServer,
};