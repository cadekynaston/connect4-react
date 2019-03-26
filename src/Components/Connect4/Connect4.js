import React from 'react'

import GameBoard from '../GameBoard/GameBoard'
import GameInfo from '../GameInfo/GameInfo'
import Game from '../resources/game';
import { TwitterPicker } from 'react-color';


class Connect4 extends React.Component {

  constructor() {
    super()

    this.state = {
      game: new Game()
    }

    this.selectColumn = this.selectColumn.bind(this)
    this.previewSelection = this.previewSelection.bind(this)
    this.changePlayerColor = this.changePlayerColor.bind(this)
    this.handleChangeComplete = this.handleChangeComplete.bind(this)
    this.restartGame = this.restartGame.bind(this)
  }

  selectColumn(column) {

    if (this.state.game.winner) return

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

  handleChangeComplete(color) {
    this.setState(prevState => {
      prevState.game.players[0].color = color.hex;
      return prevState;
    })
  }

  changePlayerColor(player, color = 'green') {
    this.setState(prevState => {
      prevState.game.players[player].color = color;
      return prevState;
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
        <TwitterPicker
          color={ this.state.game.players[0].color }
          onChangeComplete={ this.handleChangeComplete }/>
        <GameBoard
          selectColumn={this.selectColumn}
          previewSelection={this.previewSelection}
          game={this.state.game}
        />
        <GameInfo
          restartGame={this.restartGame}
          changePlayerColor={this.changePlayerColor}
          game={this.state.game}
        />
      </div>
    )
  }
}

export default Connect4

