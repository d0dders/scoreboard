import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ index, score, scoreChange }) => {
    
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={() => {scoreChange(index, -1)}}> - </button>
        <span className="counter-score">{ score }</span>
        <button className="counter-action increment" onClick={() => {scoreChange(index, 1)}}> + </button>
      </div>
    );
}

Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  scoreChange: PropTypes.func 
}

export default Counter;