import React from 'react'

function GamePiece(props) {

  let handleClick = () => {
    props.columnClick(props.column)
  }

  let handleHover = () => {
    props.previewSelection(props.column)
  }

  let handleMouseOut = () => {
    props.removePreview()
  }

  return (

    <div
      style={{backgroundColor: props.color}}
      onClick={handleClick}
      onMouseOver={handleHover}
      onMouseOut={handleMouseOut}
      className={`game-piece ${props.preview ? 'preview' : ''} ${props.winningMove ? 'winning-move' : ''}`} >
    </div>
  )
}

export default GamePiece
