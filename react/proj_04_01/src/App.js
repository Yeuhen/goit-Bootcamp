import React, {Component} from 'react';
import logo from './logo.svg';
import Registration from './Component/Registration/Registration';
import Profile from './Component/Profile/Profile';
import Order from './Component/Order/Order';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            registration: false,
            profile: false,
            order: false,
            isActive: true,
            list: ['a', 'b', 'c', 'd'],
        }
        this.btnInputRef = React.createRef();
    }


    // getBtnRef =btn => {this.BtnRef = btn};

    showModale = (e) => {
        console.log(this.btnInputRef.current);
        e.stopPropagation();
        let id = e.target.id;
        if (e.target.className === 'overlay' || e.target.className === 'btn' || e.target.className === 'close' ) {
            this.setState(prev => ({
                [id]: !prev[id],
                isActive: !prev.isActive,
            }))
        }

    };

    render() {
        const {registration,profile,order, isActive} = this.state;
        return (
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt="logo"/>
                    <h1 className='App-title'>Welcome to React</h1>
                </header>
                <button className='btn' id='registration' onClick={this.showModale} ref={this.btnInputRef}>Registration</button>
                {isActive && <div>

                    <button className='btn' id='profile' onClick={this.showModale}>Profile</button>
                    <button className='btn' id='order' onClick={this.showModale}>Order</button>
                </div>}

                {registration && <Registration close={this.showModale} id = 'registration'/>}
                {profile && <Profile close={this.showModale} id = 'profile'/>}
                {order && <Order close={this.showModale} id = 'order'/>}

            </div>
        );
    }
}

export default App;

