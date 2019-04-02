import React from 'react'

import GameBoard from '../GameBoard/GameBoard'
import GameInfo from '../GameInfo/GameInfo'
import Game from '../resources/game';

class Connect4 extends React.Component {

  constructor() {
    super()

    this.state = {
      game: new Game()
    }
  }

  selectColumn = column => {

    // had to use callback function for previewSelection method due to async from setState
    if (this.state.game.winner || this.state.game.tieGame) return
    this.setState(prevState => {
      prevState.game.updateBoard(column);
      return prevState;
    }, () => this.previewSelection(column))

  }

  previewSelection = column => {
    if (this.state.game.winner || this.state.game.tieGame) {
     this.removePreview()
     return
    }
    this.setState(prevState => {
      prevState.game.previewSelection(column);
      return prevState;
    })
  }

  removePreview = () => {
    this.setState(prevState => {
      prevState.game.previewCell = {
        column: null,
        row: null
      }
      return prevState;
    })
  }


  handleColorChangeComplete = (player, newColor) => {
    this.setState(prevState => {
      prevState.game.players[player].color = newColor;
      return prevState;
    })
  }

  handlePlayerNameChange = (player, newName) => {
    this.setState(prevState => {
      prevState.game.players[player].name = newName;
      return prevState
    })
  }

  masterReset = () => {
    this.setState({
      game: new Game()
    })
  }

  resetBoard = () => {
    this.setState(prevState => {
      const newGame = new Game(prevState.game.players)
      return {
        game: newGame
      }
    })
  }

  render() {

    return (
      <div className="container">

        <GameBoard
          selectColumn={this.selectColumn}
          previewSelection={this.previewSelection}
          removePreview={this.removePreview}
          game={this.state.game} />

        <GameInfo
          resetBoard={this.resetBoard}
          masterReset={this.masterReset}
          handleColorChangeComplete={this.handleColorChangeComplete}
          handlePlayerNameChange={this.handlePlayerNameChange}
          game={this.state.game} />

      </div>
    )
  }
}

export default Connect4

