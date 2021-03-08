import React from 'react';
import ReactDOM from 'react-dom';
import {compose, createStore, applyMiddleware} from 'redux';
import './index.scss';
import thunk from 'redux-thunk'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux'



const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
        {/* провайдер дает возможность всему остальному приложению пользоватся стором */}
        <Provider store ={store}> 
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
