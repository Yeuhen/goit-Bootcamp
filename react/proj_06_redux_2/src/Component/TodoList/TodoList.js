/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import ToDo from '../Todo/Todo';
import {connect} from 'react-redux';
import './TodoList.css';


const TodoList = (props) => {
    return (
        <ul className='theList'>
            {props.items.map(el => <ToDo
                    text={el.text}
                    id={el.id}
                    key={el.id}
                    isEdit={el.isEdit}
                />
            )}
        </ul>
    )
};

TodoList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
};

function mapStateToProps(state) {
    return {
        // item: state.inputItem,
        items: state.arrayItems
    }
}


export default connect(mapStateToProps)(TodoList);
