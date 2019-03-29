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

    this.selectColumn = this.selectColumn.bind(this)
    this.previewSelection = this.previewSelection.bind(this)
    this.handleColorChangeComplete = this.handleColorChangeComplete.bind(this)
    this.handlePlayerNameChange = this.handlePlayerNameChange.bind(this)
    this.restartGame = this.restartGame.bind(this)
  }

  selectColumn(column) {
    if (this.state.game.winner || this.state.game.tieGame) return
    this.state.game.updateBoard(column);
    this.setState(prevState => {
      return prevState;
    })
    this.previewSelection(column)
  }

  previewSelection(column) {
    if (this.state.game.winner) return
    this.state.game.previewSelection(column);
    this.setState(prevState => {
      return prevState;
    })
  }

  handleColorChangeComplete(player, newColor) {
    this.setState(prevState => {
      prevState.game.players[player].color = newColor;
      return prevState;
    })
  }

  handlePlayerNameChange(player, newName) {
    this.setState(prevState => {
      prevState.game.players[player].name = newName;
      return prevState
    })
  }

  restartGame() {
    this.setState({
      game: new Game()
    })
  }

  render() {

    return (
      <div className="container">

        <GameBoard
          selectColumn={this.selectColumn}
          previewSelection={this.previewSelection}
          game={this.state.game}
        />
        <GameInfo
          restartGame={this.restartGame}
          handleColorChangeComplete={this.handleColorChangeComplete}
          handlePlayerNameChange={this.handlePlayerNameChange}
          game={this.state.game}
        />

      </div>
    )
  }
}

export default Connect4

