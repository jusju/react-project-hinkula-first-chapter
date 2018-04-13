import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloComponent from './HelloComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HelloComponent firstname="Jukka"/>, document.getElementById('root'));
registerServiceWorker();
