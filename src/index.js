import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {store} from './store/configureStore'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
 document.getElementById('root')
);
=======
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> ab7c196b2ffcb843e0da905f3833d1da89e12ea5

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
