import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import store from './redux/redux-store';
import App from './App';
import StoreContext from "./StoreContext";

const rerenderEntireTree = (state) => {
  // debugger;
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <StoreContext.Provider value={store}>
          <App />
        </StoreContext.Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  rerenderEntireTree(store.getState());
});