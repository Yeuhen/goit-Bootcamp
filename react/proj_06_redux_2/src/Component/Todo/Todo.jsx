import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import {connect} from 'react-redux';
import {inputItem} from '../../actions/inputAction';
import {deleteItem, saveItem, switchEditMode} from "../../actions/arrayAction";
import './Todo.css';


class Todo extends Component {


    deleteTask = () => {
        // e.preventDefault();
        this.props.deleteItem(this.props.id);
    };

    switcher = () => {
        // e.preventDefault();
        console.log(this.props);
        this.props.switchEditMode(this.props.id);
    };


    saveButton = () => {
        // e.preventDefault();
        this.props.saveItem(this.props.id, this.props.item);
        this.props.switchEditMode(this.props.id);
    };


    render() {
        const {propsInputItem} = this.props.item;
        const {text} = this.props;
        console.log('isedit', this.props);

        return (
            <li className='theList__item'>
                {this.props.isEdit ?
                    <div className='theList__item-div'>
                        <input type="text"
                               value={propsInputItem}
                               name='taskText'
                               onChange={this.props.inputItem}
                        />
                        <div>
                            <Button text='Save' onclick={this.saveButton}/>
                            <Button text='Cancel' onclick={this.swither}/>
                        </div>
                    </div>
                    :
                    <div className='theList__item-div'>
                        {text}
                        <div>
                            <Button text='Edit' onclick={this.switcher}/>
                            <Button text='Delete' onclick={this.deleteTask}/>
                        </div>
                    </div>
                }
            </li>
        );
    }
}

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
    return {
        item: state.inputItem,
        items: state.arrayItems,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        inputItem: function (e) {
            dispatch(inputItem(e.target.value))
        },
        deleteItem: function (id) {
            dispatch(deleteItem(id))
        },
        saveButton: function (id, text) {
            dispatch(saveItem(id, text))
        },
        switchEditMode: function (id) {
            dispatch(switchEditMode(id))
        },

    }
}

console.log(this.props);

export default connect(mapStateToProps, mapDispatchToProps)(Todo);