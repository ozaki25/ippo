import gql from 'graphql-tag';

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

const addLikeToTweet = gql`
  mutation addLikeToTweet($uid: String, $hashtag: String, $tweetid: String) {
    addLikeToTweet(uid: $uid, hashtag: $hashtag, tweetid: $tweetid) {
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
  registerNotification,
  unregisterNotification,
  publishNotification,
  createEvent,
  createTweet,
  createUser,
  addLikeToTweet,
  readNotification,
  excuteUpdateExternalEvents,
};
