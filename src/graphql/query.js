import gql from 'graphql-tag';

const hello = gql`
  query {
    hello
    count
  }
`;

const connpassEvents = gql`
  query {
    connpass {
      events {
        event_id
        title
        event_url
        catch
        place
      }
    }
  }
`;

const registerSubscriber = token =>
  gql`
    mutation {
      subscriber(token: $token) {
        token: token
      }
    }
  `;

export default {
  hello,
  connpassEvents,
  registerSubscriber,
};
