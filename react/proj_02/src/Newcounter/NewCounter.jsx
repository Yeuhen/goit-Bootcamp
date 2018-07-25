import React, {Component} from 'react';

class NewCounter extends Component {
    // constructor() {
    //     super();
    //     // дає можливість достучатися до this
    //     this.state ={  // для збереження початкових данних. З fetch данні зберігаються в state
    //         counterStart: 0,
    //
    //     }
    //
    //     this.plus = this.plus.bind(this); // робимо прив'язку
    //     this.minus = this.minus.bind(this);
    // }
    state = {
        counterStart: 0,
    };
    // setState(obj||function(prevState), callback());

    plus = () => {

        this.setState(prevState => ({counterStart: prevState.counterStart + 1}),()=> console.log('Async',this.state.counterStart) )
    };

    minus = () => {
        // this.setState({
        //     counterStart: 5
        // })

        this.setState(prevState => ({counterStart: prevState.counterStart - 1}))
    };

    // static propTypes = {
    //   start: PropTypes.number,
    // };
    //
    // static defaultProps = {
    //     start: 100,
    // };

    render() {
        const {counterStart} = this.state;
        return (
            <div>
                <p>{counterStart}</p>
                <button onClick={this.plus}>Plus</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        )
    }
}

// 'this.plus.bind(this)' падає продуктивність, краще робити прив'язку
// ={this.minus} в такому варіанті this = undefind
export default NewCounter;
