import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/assets/styles/baselayout.css';
import App from './App';
import masterReducer from './reducers/index'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let myStore = createStore(masterReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={myStore}>
  <React.StrictMode>
    <App />
    </React.StrictMode>
    </Provider>
);


