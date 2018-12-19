import app from 'firebase/app';
import 'firebase/messaging';
import 'firebase/auth';

const prodConfig = {
  apiKey: process.env.REACT_APP_PROD_API_KEY,
  projectId: process.env.REACT_APP_PROD_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID,
};

const devConfig = {
  apiKey: process.env.REACT_APP_DEV_API_KEY,
  projectId: process.env.REACT_APP_DEV_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.emailAuthProvider = app.auth.EmailAuthProvider;
    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  askForPermissionToReceiveNotifications = async () => {
    try {
      const messaging = app.messaging();
      await messaging.requestPermission();
      return messaging.getToken();
    } catch (error) {
      console.error(error);
    }
  };
}

export default Firebase;
