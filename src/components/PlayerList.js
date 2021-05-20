import React from 'react';
import Player from './Player';
import { Consumer } from './Context';

const PlayerList = () => {

  return (
    <Consumer>
      {({players, actions}) => {
        return (
          <React.Fragment>
            {players.map((player, index) =>
              <Player
                index={index}
                key={player.id.toString()}
                isHighScore={player.score === actions.getHighScore() &&
                  player.score !== 0}
              />
            )}
          </React.Fragment>
        )
      }}
    </Consumer>
  )
}

export default PlayerList;