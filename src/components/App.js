import React, {Component} from 'react';

import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';


class App extends Component {
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
    this.setState( prevState => {
      const newPlayers = [...prevState.players];
      newPlayers[index].score += delta;
      return {
        players: newPlayers
      };
    });
    
  }

  handleRemovePlayer = (id) => {
    console.log(id);
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
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
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players}
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            index={index}
            key={player.id.toString()} 
            removePlayer={this.handleRemovePlayer} 
            scoreChange={this.handleScoreChange}  
          />
        )}

        <AddPlayerForm 
          addPlayer={this.handleAddPlayer}  
        />

      </div>
    );
  }
}

export default App;
