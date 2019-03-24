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

  restartGame() {
    this.setState({
      game: new Game()
    })
  }

  render() {

    return (
      <>
        <GameInfo
          restartGame={this.restartGame}
          game={this.state.game}
        />
        <GameBoard
          selectColumn={this.selectColumn}
          previewSelection={this.previewSelection}
          game={this.state.game}
        />
      </>
    )
  }
}

export default Connect4

