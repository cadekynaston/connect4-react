import React from 'react'

import GamePiece from '../GamePiece/GamePiece'

function GameBoard(props) {
  let gamePieces = props.game.board.map((column, i) => {
    return column.map((piece, j) => {

      let preview = (props.game.previewCell.row === i && props.game.previewCell.column === j);

      let cellColor = piece.playersMove !== null
        ? props.game.players[piece.playersMove].color
        : preview
          ? props.game.players[props.game.currentPlayer].color
          : piece.color

      return  (
        <GamePiece
          key={`${i}${j}`}
          column={j}
          row={i}
          color={cellColor}
          columnClick={props.selectColumn}
          previewSelection={props.previewSelection}
          preview={preview}
        />
      )
    })
  })

  return (
    <div className="game-board" >
      {gamePieces}
    </div>
  )

}

export default GameBoard

