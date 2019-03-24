import React from 'react'

import GamePiece from '../GamePiece/GamePiece'

function GameBoard(props) {
  let gamePieces = props.game.board.map((column, i) => {
    return column.map((piece, j) => {
      return <GamePiece columnClick={props.selectColumn} key={`${i}${j}`} column={j} row={i} color={piece.color} />
    })
  })

  return (
    <div className="game-board" >
      {gamePieces}
    </div>
  )

}

export default GameBoard

