import React from "react"
import Navbar from "./Part/Navbar.jsx"
import {Route, Switch} from "react-router-dom"
import Register from "./Pages/Register.jsx"
import Login from "./Pages/Login.jsx";

const App = () => {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={() => <div>Home</div>}/>
                <Route path="/contact" exact component={() => <div>contact</div>}/>
                <Route path="/about" exact component={() => <div>about</div>}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/register" exact component={Register}/>
            </Switch>
        </div>
    )
}

export default App