import React from 'react'

import GameBoard from '../GameBoard/GameBoard'
import GameInfo from '../GameInfo/GameInfo'
import Game from '../resources/game';


class Connect4 extends React.Component {

  constructor() {
    super()

    const game = new Game()
    this.state = {
      game
    }

    this.selectColumn = this.selectColumn.bind(this)
    this.restartGame = this.restartGame.bind(this)
  }

  selectColumn(column) {
    this.setState(prevState => {
      prevState.game.updateBoard(column);
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
        <GameInfo restartGame={this.restartGame} />
        <GameBoard selectColumn={this.selectColumn} game={this.state.game} />
      </>
    )
  }
}

export default Connect4

