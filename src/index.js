import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import store from './store.js';
// import { bugAdded, bugResolved } from './actions';
// import { Provider } from 'react-redux';

// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed!", store.getState());
// })

//  state=reducer(state, action);
//  notify the subscribers

// store.dispatch(bugAdded("Bug 1"));
// store.dispatch(bugResolved(1));
// console.log(store.getState());
// store.dispatch({
//   type: "bugRemoved",
//   payload: {
//     id: 1
//   }

// });







ReactDOM.render(
  // <Provider store={store}>
  <App />
  // </Provider>
  ,
  document.getElementById('root')
);

