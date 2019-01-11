import gql from 'graphql-tag';

const hello = gql`
  query {
    hello
    count
  }
`;

const externalEvents = gql`
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

const internalEvents = gql`
  query {
    internalEvents {
      id
      title
      catchMessage
      place
      hashtag
      startedAt
      endedAt
    }
  }
`;

const internalEvent = gql`
  query($hashtag: String) {
    internalEvent(hashtag: $hashtag) {
      id
      title
      catchMessage
      place
      hashtag
      startedAt
      endedAt
      name
    }
  }
`;

const joinedEvents = gql`
  query($uid: String) {
    joinedEvents(uid: $uid) {
      id
      title
      catchMessage
      place
      hashtag
      startedAt
      endedAt
    }
  }
`;

const organizedEvents = gql`
  query($uid: String) {
    organizedEvents(uid: $uid) {
      id
      title
      catchMessage
      place
      hashtag
      startedAt
      endedAt
    }
  }
`;

const tweets = gql`
  query($hashtag: String, $limit: Int, $startId: String, $uid: String) {
    tweets(hashtag: $hashtag, limit: $limit, startId: $startId, uid: $uid) {
      tweetList {
        id
        name
        text
        time
        hashtag
      }
      startId
      event {
        id
        title
        catchMessage
        place
        hashtag
        startedAt
        endedAt
        name
      }
      joined
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

const unregisterNotification = gql`
  mutation unregisterNotification($token: String) {
    unregisterNotification(token: $token) {
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

const createTweet = gql`
  mutation createTweet($tweet: inputTweet) {
    createTweet(tweet: $tweet) {
      result
    }
  }
`;

const createUser = gql`
  mutation createUser($user: inputUser) {
    createUser(user: $user) {
      result
    }
  }
`;

const fetchUser = gql`
  mutation fetchUser($uid: String) {
    fetchUser(uid: $uid) {
      uid
      displayName
    }
  }
`;

export default {
  hello,
  externalEvents,
  internalEvents,
  internalEvent,
  joinedEvents,
  organizedEvents,
  tweets,
  registerNotification,
  unregisterNotification,
  publishNotification,
  createEvent,
  createTweet,
  createUser,
  fetchUser,
};
