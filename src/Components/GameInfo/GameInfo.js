import React from 'react'

import PlayerInfo from '../PlayerInfo/PlayerInfo';

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

      <PlayerInfo
        playerNum={0}
        newColor="blue"
        color={props.game.players[0].color}
        name={props.game.players[0].name}
        changePlayerColor={props.changePlayerColor}/>

      <PlayerInfo
        playerNum={1}
        newColor="purple"
        color={props.game.players[1].color}
        name={props.game.players[1].name}
        changePlayerColor={props.changePlayerColor}/>

      <button onClick={props.restartGame}>Reset</button>
    </div>
  )
}

export default GameInfo
