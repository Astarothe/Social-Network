import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import UsersContainer from "./components/Users/UsersContainer";
import {connect} from "react-redux";
import {initializeAppTC} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";

class App extends React.Component <any, any> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized){
            return <Preloader />
        }

        return (
            <div className={"app-wrapper"}>
                <HeaderContainer/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile/:userId?"}
                           render={() => <ProfileContainer/>}/>
                    <Route path={"/dialogs"}
                           render={() => <DialogsContainer/>}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>
                    <Route path={"/users"} render={() => <UsersContainer/>}/>
                    <Route path={"/login"} render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default withRouter(connect(mapStateToProps, {initializeApp: initializeAppTC})(App))



