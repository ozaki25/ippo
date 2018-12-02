const graphqlServer = process.env.REACT_APP_LOCAL
  ? 'http://localhost:4000/graphql'
  : 'https://68v4ch48mg.execute-api.ap-northeast-1.amazonaws.com/dev/graphql';

export default {
  graphqlServer,
};
