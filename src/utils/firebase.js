import app from 'firebase/app';
import 'firebase/messaging';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  projectId: process.env.REACT_APP_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

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
