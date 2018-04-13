import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RestWeather from './RestWeather';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RestWeather />, document.getElementById('root'));
registerServiceWorker();
