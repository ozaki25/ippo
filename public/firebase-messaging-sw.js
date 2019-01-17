importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
  messagingSenderId: '911143219860',
});

const messaging = firebase.messaging();

messaging.onMessage(function(payload) {
  console.log('Message received. ', payload);
  const { title, body, icon } = payload;
  const notification = new Notification(title, { body, icon });
});
