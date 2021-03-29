import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './state'
import {addPost} from './state';
import {rerenderEntireTree} from './render'

// ReactDOM.render( 
//   <React.StrictMode>
//     <App state={state} addPost={addPost}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

rerenderEntireTree(state);
reportWebVitals();
