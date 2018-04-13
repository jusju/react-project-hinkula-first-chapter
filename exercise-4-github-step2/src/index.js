import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GithubList from './GithubList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GithubList />, document.getElementById('root'));
registerServiceWorker();
