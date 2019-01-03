import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import 'src/index.css';
import App from 'src/App';
import * as serviceWorker from 'src/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
