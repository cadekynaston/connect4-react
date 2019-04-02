import React from 'react'

import PlayerInfo from '../PlayerInfo/PlayerInfo';

function GameInfo(props) {

  const currentGameState = props.game.tieGame
    ? `It's a tie`
    : props.game.winner
      ? `${props.game.players[props.game.currentPlayer].name} wins!`
      : `${props.game.players[props.game.currentPlayer].name}'s turn`

  const playerInfoArray = props.game.players.map((player, i) => (
      <PlayerInfo
        key={i}
        playerNum={i}
        playerColor={player.color}
        name={player.name}
        handleColorChangeComplete={props.handleColorChangeComplete}
        handlePlayerNameChange={props.handlePlayerNameChange}/>
    )
  )

  return (
    <div className="game-info">
      <h1>Connect 4&nbsp;
        <span style={{color:"#61DAFB"}}>React</span>
      </h1>
      <h2>{currentGameState}</h2>

      <div className="player-info-container">
        {playerInfoArray}
      </div>

      <button onClick={props.resetBoard}>Reset Board</button>
      <button className="master" onClick={props.masterReset}>Master Reset</button>
    </div>
  )
}

export default GameInfo
