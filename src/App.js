import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />

        <div className="app-wrapper-content">
          <Route
            path="/profile"
            render={() => (
              <Profile
                postsData={props.state.profilePage}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route
            path="/messages"
            render={() => <Dialogs dialogDataPage={props.state.dialogPage} />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
