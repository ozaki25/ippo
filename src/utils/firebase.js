import app from 'firebase/app';
import 'firebase/messaging';
import 'firebase/auth';

const prodConfig = {
  apiKey: process.env.REACT_APP_PROD_API_KEY,
  authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROD_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID,
};

const devConfig = {
  apiKey: process.env.REACT_APP_DEV_API_KEY,
  authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_DEV_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth;
  }

  doSignOut = () => this.auth().signOut();

  onAuthUserListener = (next, fallback) =>
    this.auth().onAuthStateChanged(authUser =>
      authUser ? next(authUser) : fallback(),
    );

  askForPermissionToReceiveNotifications = async () => {
    const messaging = app.messaging();
    await messaging.requestPermission();
    return messaging.getToken();
  };
}

export default Firebase;
