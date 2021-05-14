import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number,
    score: PropTypes.number.isRequired,
    index: PropTypes.number,
    isHighScore: PropTypes.bool,
    scoreChange: PropTypes.func,
    removePlayer: PropTypes.func
  }

  render(){

    const {name, id, score, index, isHighScore, scoreChange, removePlayer} = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          <Icon isHighScore={isHighScore} />
          { name }
        </span>
  
        <Counter 
          score={score}
          index={index}
          scoreChange={scoreChange}  
        />
      </div>
    );
  }
}

export default Player;