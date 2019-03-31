import React from 'react'

import PlayerInfo from '../PlayerInfo/PlayerInfo';

function GameInfo(props) {

  let currentGameState = props.game.tieGame
    ? `It's a tie`
    : props.game.winner
      ? `${props.game.players[props.game.currentPlayer].name} wins!`
      : `${props.game.players[props.game.currentPlayer].name}'s turn`

  return (
    <div className="game-info">
      <h1>Connect 4&nbsp;
        <span style={{color:"#61DAFB"}}>React</span>
      </h1>
      <h2>{currentGameState}</h2>

      <div className="player-info-container">

      <PlayerInfo
        playerNum={0}
        playerColor={props.game.players[0].color}
        name={props.game.players[0].name}
        handleColorChangeComplete={props.handleColorChangeComplete}
        handlePlayerNameChange={props.handlePlayerNameChange}/>

      <PlayerInfo
        playerNum={1}
        playerColor={props.game.players[1].color}
        name={props.game.players[1].name}
        handleColorChangeComplete={props.handleColorChangeComplete}
        handlePlayerNameChange={props.handlePlayerNameChange}/>

      </div>

      <button onClick={props.restartGame}>Reset</button>
    </div>
  )
}

export default GameInfo
