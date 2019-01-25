const graphqlServer = process.env.REACT_APP_LOCAL
  ? 'http://localhost:4000/graphql'
  : `${process.env.REACT_APP_API_URL}`;
const uploadEndpoint = process.env.REACT_APP_GET_FILE_UPLOAD_ENDPOINT;

export default {
  graphqlServer,
  uploadEndpoint,
};
