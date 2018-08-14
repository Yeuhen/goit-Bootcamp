import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route, NavLink} from 'react-router-dom';
import Team from './Components/Team/Team';
import Home from './Components/Home/Home';
import data from './data';


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                    <nav>
                        <NavLink exact to='/'>Home</NavLink>
                        <NavLink to='/team'>Team</NavLink>
                    </nav>
                </header>
                <Switch>
                    <Route exact path='/' component = {Home}/>
                    <Route path ='/team' render ={ props => <Team {...props} data = {data}/>}/>
                </Switch>
            </div>
        );
    }
}

export default App;
