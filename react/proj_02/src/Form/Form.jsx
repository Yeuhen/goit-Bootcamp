import React, {Component} from 'react';
import './Form.css';


// const input = {
//   padding: '10px',
//   border: '2px solid #FFF',
//   width: '165px',
// };
//
// const btn = {
//   padding: '10px',
//   fontSize: '16px',
//   margin: '10px',
//   marginRight: '0px',
//   backgroundColor: '#0066FF',
//   color: '#FFF',
//   border: '2px solid #0066FF'
// };


class Form extends Component {

  state = {
    login: '',
    password: '',
  };

  send = (e) => {
    e.preventDefault();
  };

  // changeLoginInput =(e) => {
  //     const value = e.target.value;
  //     this.setState({
  //         login: value,
  //     })
  //
  // };
  // changePasswordInput =(e) => {
  //     const value = e.target.value;
  //     this.setState({
  //         password: value,
  //     })
  //
  // };

  changeInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    })
  };

  render() {

    return (
      <form onSubmit={this.send}>
        <input type="text"
               name='login'
               placeholder='Your login'
               value={this.state.login}
               onChange={this.changeInput}
               className= 'input'
        />
        <input type="password"
               name='password'
               placeholder='Password'
               value={this.state.password}
               onChange={this.changeInput}
               className='input'
        />
        <button type='submit' className= 'btn'>Send</button>
      </form>
    )
  }
}

export default Form;
