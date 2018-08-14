/*eslint-disable*/
import React from 'react';
import Line from '../Line/Line';
import PropTypes from 'prop-types';

const LinesList =({text, delLine, update})=> {
    return (
      <ul>
          {text.map(el => <Line text={el.text} id={el.id} key = {el.id} func={delLine} update={update}/>)}
      </ul>
    );
};

LinesList.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.shape({
      text:
      PropTypes.string.isRequired,
      id:
      PropTypes.number.isRequired,
    }
  ))
};

export default LinesList;
