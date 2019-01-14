import gql from 'graphql-tag';

const externalEvents = gql`
  query($limit: Int, $startId: String) {
    externalEvents(limit: $limit, startId: $startId) {
      items {
        id
        connpassId
        title
        eventUrl
        catchMessage
        place
        startedAt
        endedAt
      }
      startId
    }
  }
`;

const internalEvents = gql`
  query($limit: Int) {
    internalEvents(limit: $limit) {
      items {
        id
        title
        catchMessage
        place
        hashtag
        startedAt
        endedAt
      }
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
  query($uid: String, $limit: Int, $startId: String) {
    joinedEvents(uid: $uid, limit: $limit, startId: $startId) {
      items {
        id
        title
        catchMessage
        place
        hashtag
        startedAt
        endedAt
      }
      startId
    }
  }
`;

const organizedEvents = gql`
  query($uid: String, $limit: Int, $startId: String) {
    organizedEvents(uid: $uid, limit: $limit, startId: $startId) {
      items {
        id
        title
        catchMessage
        place
        hashtag
        startedAt
        endedAt
      }
      startId
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

const excuteUpdateExternalEvents = gql`
  mutation excuteUpdateExternalEvents {
    excuteUpdateExternalEvents
  }
`;

export default {
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
  excuteUpdateExternalEvents,
};
