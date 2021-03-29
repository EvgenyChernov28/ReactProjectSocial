import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updatePostText} from './state';


export let rerenderEntireTree = (state) => {
    ReactDOM.render( 
        <React.StrictMode>
          <App state={state} addPost={addPost} updatePostText={updatePostText}/>
        </React.StrictMode>,
        document.getElementById('root')
      );
}
