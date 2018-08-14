import React from 'react';
import Day from '../Day/Day';
import {connect} from 'react-redux';

const Grid = (props) => {
    console.log(props);
    return (
        <div className='row'>
            {props.days.map((el,i)=> <Day day={el}
                                          key={el + i}/>)}
        </div>
    );
};

// export default Grid;

function mapStateToProps (state) {
    return {
        days: state.days,
    }
}

export default connect(mapStateToProps)(Grid);