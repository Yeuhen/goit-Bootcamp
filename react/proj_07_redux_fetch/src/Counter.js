import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add, minus, reset, incAsync} from './actions/counterActions';
import {galleryAsync} from './actions/galleryAction';

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
        // this.props.increment(1)
        this.props.asyncPlus(3)
    }

    down = () => {
        this.props.decrement(1);
    }

    render() {
        // const {counter} = this.state;
        return (
            <div className='redux'>
                <h1>{this.props.counter}</h1>
                <button onClick={this.down}>-</button>
                <button onClick={this.props.reload}>reset</button>
                <button onClick={this.rise}>+</button>
                <button onClick={this.props.galleryFetch}>Fetch</button>
            </div>        );
    }
}

function mapStateToProps(state) {
    return {counter: state.counter}
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
        asyncPlus(number) {
            dispatch(incAsync(number))
        },
        galleryFetch(){
            dispatch(galleryAsync())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);