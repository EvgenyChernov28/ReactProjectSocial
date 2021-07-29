import React from "react";
import "./App.css";
import HeaderConteiner from "./components/Header/HeaderConteiner";
import Navbar from "./components/Navbar/Navbar";
import ProfileConteiner from "./components/Profile/ProfileConteiner";
import { Route, withRouter } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersConteiner.jsx";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app_reducer"
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if(!this.props.initialized){
            return <Preloader />
        }
        return (
            <div>
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
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);


