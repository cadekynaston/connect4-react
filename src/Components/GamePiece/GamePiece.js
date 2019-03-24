import React from 'react'

function GamePiece(props) {

  let handleClick = () => {
    props.columnClick(props.column)
  }

  return (
    <div style={{backgroundColor: props.color}} onClick={handleClick} className="game-piece">
    </div>
  )
}

export default GamePiece
