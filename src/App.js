import React from "react";
import "./App.css";
import HeaderConteiner from "./components/Header/HeaderConteiner";
import Navbar from "./components/Navbar/Navbar";
import { Route, withRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app_reducer";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";

const ProfileConteiner = React.lazy(() => import("./components/Profile/ProfileConteiner"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./components/users/UsersConteiner.jsx"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />;
        }
        return (
            <div>
                <React.Suspense fallback={<Preloader />}>
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
                </React.Suspense>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});
export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);
