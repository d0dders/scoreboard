import React from 'react';
import { Consumer } from './Context';

const Stats = () => {
  return (
    <Consumer>
      { ({players}) => {
        const totalPlayers = players.length;
        const totalScore = players.reduce((total, player) => {
          return total + player.score;
        }, 0)

        return (
          <table className="stats">
            <tbody>
              <tr>
                <td>Players:</td>
                <td>{totalPlayers}</td>
              </tr>
              <tr>
                <td>Total Points:</td>
                <td>{totalScore}</td>
              </tr>
            </tbody>
          </table>
        );
      }}
    </Consumer>

  )
}

export default Stats;