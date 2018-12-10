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

const registerSubscriber = gql`
  mutation registerNotification($token: String) {
    registerNotification(token: $token) {
      token
    }
  }
`;

export default {
  hello,
  connpassEvents,
  registerSubscriber,
};
