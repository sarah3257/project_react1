import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {combineReducers,createStore} from 'redux';
import UserReducer from './project/reducer/UserReducer';
import ToDoReducer from './project/reducer/ToDoReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
let x= createStore(combineReducers({users: UserReducer,toDo:ToDoReducer}))

root.render(
  // <React.StrictMode>
  <Provider store={x}>
    <App />
    </Provider>
  //  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
