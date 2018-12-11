import gql from 'graphql-tag';

const hello = gql`
  query {
    hello
    count
  }
`;

const connpassEvents = gql`
  # query($searchQuery: String) {
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

const registerNotification = gql`
  mutation registerNotification($token: String) {
    registerNotification(token: $token) {
      result
    }
  }
`;

const publishNotification = gql`
  mutation publishNotification($target: String) {
    publishNotification(target: $target) {
      result
    }
  }
`;

export default {
  hello,
  connpassEvents,
  registerNotification,
  publishNotification,
};
