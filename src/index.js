import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import 'typeface-roboto';
import 'index.css';
import App from 'App';
import * as serviceWorker from 'serviceWorker';
import reportWebVitals from 'reportWebVitals';

Sentry.init({ dsn: process.env.REACT_APP_SENTRY_URL });

ReactDOM.render(<App />, document.getElementById('root'));

function sendToAnalytics({ id, name, value, delta }) {
  console.log({ id, name, value, delta });
  const body = JSON.stringify({ id, name, value, delta });
  const url = process.env.REACT_APP_ANALYTICS_URL;

  if (navigator.sendBeacon) {
    console.log('sendBeacon');
    navigator.sendBeacon(url, body);
  } else {
    console.log('fetch');
    fetch(url, { body, method: 'POST', keepalive: true });
  }
}

reportWebVitals(sendToAnalytics);

serviceWorker.register();
