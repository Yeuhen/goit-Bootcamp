/*eslint-disable*/
import React from 'react';
import Line from '../Line/Line';
import FlipMove from 'react-flip-move';
import PropTypes from 'prop-types';

const LinesList =({elements, delLine, update})=> {
    return (
      <ul>
        <FlipMove>
          {elements.map(el => <Line text={el.text} id={el.id} key = {el.id} func={delLine} update={update}/>)}
        </FlipMove>
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
