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
        started_at
        ended_at
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

const publishNotification = gql`
  mutation publishNotification($target: String) {
    publishNotification(target: $target) {
      token
    }
  }
`;

export default {
  hello,
  connpassEvents,
  registerSubscriber,
  publishNotification,
};
