import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileConteiner from "./components/Profile/ProfileConteiner";
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersConteiner.jsx";
const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />

                <div className="app-wrapper-content">
                    <Route path="/profile/:userId" render={() => <ProfileConteiner />} />
                    <Route
                        path="/messages"
                        render={() => <DialogsContainer />}
                    />
                    <Route path="/users" render={() => <UsersContainer />} />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
