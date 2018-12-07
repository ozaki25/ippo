import React from 'react';
import ReactDOM from 'react-dom';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'src/index.css';
import App from 'src/App';
import * as serviceWorker from 'src/serviceWorker';
import { initializeFirebase } from './push-notification';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
initializeFirebase();
