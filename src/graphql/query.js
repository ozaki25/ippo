import { gql } from '@apollo/client';

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
      likes
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
        likes
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
  fetchUser,
};
