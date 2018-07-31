/*eslint-disable*/
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../Btn/Btn';
import styles from './Line.css';

class Line extends Component {

  state = {
    isEdit: false,
    elementText: this.props.text,
  };

  deleteLi = () => {
    this.props.func(this.props.id);
  };

  edit = () => {
    this.setState(state => ({
      isEdit: !state.isEdit
    }))
  };

  inputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState = ({
      [name]: value,
    })
  };

  taskUpdate = () => {
    this.props.update(this.props.id, this.state.elementText);
    this.edit();
  };


  render() {
    const {text} = this.props;
    return (
      <li className={styles.theList__item}>

        {this.state.isEdit ?
          <div>
            <input type="text" value={this.state.elementText} onChange={this.inputChange}/>
            <Button text='Save' onclick={this.taskUpdate}/>
            <Button text='Cancel' onclick={this.edit}/>
          </div> :
          <div>
            {text}
            <Button text='Save' onclick={this.edit}/>
            <Button text='Delete' onclick={this.deleteLi}/>
          </div>
        }
      </li>
    );
  }
}

Line.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  func: PropTypes.func,
};

Line.defaultProps = {
  func: () => '',
};


export default Line;
