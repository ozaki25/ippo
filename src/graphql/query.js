import gql from 'graphql-tag';

const allEvents = gql`
  query($uid: String, $limit: Int) {
    allEvents(uid: $uid, limit: $limit) {
      joined {
        id
        title
        catchMessage
        place
        hashtag
        startedAt
        endedAt
      }
      recommended {
        id
        title
        catchMessage
        place
        hashtag
        startedAt
        endedAt
      }
      internal {
        id
        title
        catchMessage
        place
        hashtag
        startedAt
        endedAt
      }
      external {
        id
        connpassId
        title
        eventUrl
        catchMessage
        place
        startedAt
        endedAt
      }
      organized {
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

const recommendedEvents = gql`
  query($uid: String, $limit: Int, $startId: String) {
    recommendedEvents(uid: $uid, limit: $limit, startId: $startId) {
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

const tweet = gql`
  query($hashtag: String, $id: String) {
    tweet(hashtag: $hashtag, id: $id) {
      id
      name
      text
      time
      hashtag
      comments {
        id
        name
        text
        time
        hashtag
      }
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
        comments {
          id
          name
          text
          time
          hashtag
        }
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
        timestamp
      }
      joined
    }
  }
`;

const fetchUser = gql`
  query($uid: String) {
    fetchUser(uid: $uid) {
      uid
      displayName
      categories
      notifications {
        id
        checked
        title
        content
        timestamp
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

const readNotification = gql`
  mutation readNotification($uid: String, $notificationId: String) {
    readNotification(uid: $uid, notificationId: $notificationId) {
      result
    }
  }
`;

const excuteUpdateExternalEvents = gql`
  mutation excuteUpdateExternalEvents {
    excuteUpdateExternalEvents
  }
`;

export default {
  allEvents,
  externalEvents,
  internalEvents,
  internalEvent,
  joinedEvents,
  organizedEvents,
  recommendedEvents,
  tweet,
  tweets,
  registerNotification,
  unregisterNotification,
  publishNotification,
  createEvent,
  createTweet,
  createUser,
  fetchUser,
  readNotification,
  excuteUpdateExternalEvents,
};
