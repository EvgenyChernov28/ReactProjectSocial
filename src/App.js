import React from "react";
import "./App.css";
import HeaderConteiner from "./components/Header/HeaderConteiner";
import Navbar from "./components/Navbar/Navbar";
import ProfileConteiner from "./components/Profile/ProfileConteiner";
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersConteiner.jsx";
import Login from "./components/Login/Login";
const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderConteiner />
                <Navbar />

                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?" render={() => <ProfileConteiner />} />

                    <Route path="/messages" render={() => <DialogsContainer />} />

                    <Route path="/users" render={() => <UsersContainer />} />

                    <Route path="/login" render={() => <Login />} />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
