// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import WebDevApp from './components/WebDevApp';

ReactDOM.render(<WebDevApp />, document.getElementById("root"));

registerServiceWorker();
