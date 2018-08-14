import React, {Component} from 'react';
import { connect } from 'react-redux';
import {add, minus, reset} from './actions/counterActions';

class Counter extends Component {
    // state = {
    //     counter: 0,
    // };
    //
    // add = () =>{
    //     this.setState(prev =>({
    //         counter: prev.counter + 1,
    //     }))
    // };
    //
    // minus = () =>{
    //     this.setState(prev =>({
    //         counter: prev.counter - 1,
    //     }))
    // };
    //
    // reset = () =>{
    //     this.setState({
    //         counter: 0
    //     })
    //
    // };

    rise = () => {
        this.props.increment(5)
}

down = () => {
        this.props.reload();
        this.props.decrement(3);
}

    render() {
        // const {counter} = this.state;
        return (
            <div className='redux'>
                <h1>{this.props.counter}</h1>
                <button onClick={this.down}>-</button>
                <button onClick={this.props.reload}>reset</button>
                <button onClick={this.rise}>+</button>
            </div>        );
    }
}

function mapStateToProps(state) {
    return {counter:state.counter}
}

function mapDispatchToProps(dispatch) {
    return {
        increment: function (step) {
            dispatch(add(step))
        },
        decrement: function (step) {
            dispatch(minus(step))
        },
        reload: function () {
            dispatch(reset())
        },

    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Counter);