import React from 'react';
import ReactDOM from 'react-dom';
// import * as Sentry from '@sentry/browser';
import 'typeface-roboto';
import 'src/index.css';
import App from 'src/App';
import * as serviceWorker from 'src/serviceWorker';

// Sentry.init({ dsn: process.env.REACT_APP_SENTRY_URL });

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
