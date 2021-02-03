import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
// import store from './store.js';
// import { zmienWiek } from './actions';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


// store.dispatch(zmienWiek());
// store.dispatch(zmienWiek());
// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);


