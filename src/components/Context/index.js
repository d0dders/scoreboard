import React, { Component } from 'react';

const ScoreboardContext = React.createContext();

export class Provider extends Component {

  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState(prevState => {
      const newPlayers = [...prevState.players];
      newPlayers[index].score += delta;
      return {
        players: newPlayers
      };
    });
  }

  getHighScore = () => {
    const highScore = Math.max(...this.state.players.map(player => parseInt(player.score, 10)));
    return highScore;
  }

  handleRemovePlayer = (id) => {
    console.log(id);
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  handleAddPlayer = (name) => {
    this.setState(prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      }
    });
  }



  render() {
    return (
      <ScoreboardContext.Provider value={{
        players: this.state.players,
        actions: {
          scoreChange: this.handleScoreChange,
          removePlayer: this.handleRemovePlayer,
          addPlayer: this.handleAddPlayer,
          getHighScore: this.getHighScore
        }
      }}>
        {this.props.children}
      </ScoreboardContext.Provider>
    );
  }
}
export const Consumer = ScoreboardContext.Consumer;