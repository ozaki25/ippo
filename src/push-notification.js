import firebase from 'firebase';

const messagingSenderId = '911143219860';

export const initializeFirebase = () => {
  console.log(messagingSenderId);
  firebase.initializeApp({
    messagingSenderId,
  });
};

export const askForPermissionToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log({ token });

    return token;
  } catch (error) {
    console.error(error);
  }
};
