import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './redux/reducer/rootReducer'
import thunk from 'redux-thunk'
//creamos el store
const miStore = createStore(rootReducer, applyMiddleware(thunk))
ReactDOM.render(
  //proveemos a la aplicacion el store
  <Provider store={miStore}>
      <App />
  </Provider>
  ,
  document.getElementById('root')
);
