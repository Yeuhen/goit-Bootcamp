import React from 'react';
import PropTypes from 'prop-types';
import './index.css';


const List = ({arrNumbers}) => {
    // const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // const items = arrNumber.map(el => <li key={el}>{el}</li>);
    return (
        <ul className={'list'}>
            {arrNumbers.map(el => <li key={el} className={'list__item'}>{el}</li>)};
        </ul>

    )
};

List.propTypes = {
    arrNumbers: PropTypes.arrayOf(PropTypes.number),
};


export default List;