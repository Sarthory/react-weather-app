import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// stylesheets
import './assets/css/app.min.css'

// sw
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();