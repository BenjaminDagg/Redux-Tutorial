import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import index from './js/index';
import { Provider } from 'react-redux';
import store from './store/index';

/*
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/

ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();