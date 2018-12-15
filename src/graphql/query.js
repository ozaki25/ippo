import gql from 'graphql-tag';

const hello = gql`
  query {
    hello
    count
  }
`;

const connpassEvents = gql`
  query($searchQuery: String, $page: Int, $count: Int) {
    connpass(searchQuery: $searchQuery, page: $page, count: $count) {
      events {
        event_id
        title
        event_url
        catch
        place
        started_at
        ended_at
      }
      results_available
      results_start
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

const createEvent = gql`
  mutation createEvent($event: inputEvent) {
    createEvent(event: $event) {
      result
    }
  }
`;

export default {
  hello,
  connpassEvents,
  registerNotification,
  publishNotification,
  createEvent,
};
