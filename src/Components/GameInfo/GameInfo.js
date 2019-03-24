import React from 'react'

function GameInfo(props) {

  let currentGameState = props.game.winner
    ? `Player ${props.game.currentPlayer + 1} wins!`
    : `Player ${props.game.currentPlayer + 1}'s turn`

  return (
    <div className="game-info">
      <h1>Connect 4&nbsp;
        <span style={{color:"#61DAFB"}}>React</span>
      </h1>
      <h2>{currentGameState}</h2>
    </div>
  )
}

export default GameInfo
