import React, {Component} from 'react';
// import logo from './logo.svg';
import Button from './Component/Button/Button';
import {inputItem, inputClear} from './actions/inputAction';
import {addItem} from './actions/arrayAction'
import {connect} from 'react-redux'
import TodoList from './Component/TodoList/TodoList';
import './App.css';

class App extends Component {


    addTask = (e) => {
        e.preventDefault();
        if (this.props.item !== '') {
            this.props.addItem(this.props.item);
            this.props.inputClearing();
        }
    };

    render() {

        return (
            <div className='todoListMain'>
                <div className='header'>

                    <form onSubmit={this.addTask}>
                        <input type="text"
                               placeholder="enter task"
                               name="item"
                               className='input'
                               onChange={this.props.inputItem}
                               value={this.props.item}
                        />
                        <Button text='Add' type='submit'/>
                    </form>

                    <TodoList/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        item: state.inputItem,
    }
}


function mapDispatchToProps(dispatch) {
    return {
        inputItem: function (e) {
            dispatch(inputItem(e.target.value))
        },
        inputClearing: function () {
            dispatch(inputClear())
        },

        addItem: function (text) {
            dispatch(addItem(text))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
