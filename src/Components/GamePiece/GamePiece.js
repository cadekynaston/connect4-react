import React from 'react'

function GamePiece(props) {

  let handleClick = () => {
    props.columnClick(props.column)
  }

  let handleHover = () => {
    props.previewSelection(props.column)
  }

  return (

    <div
      style={{backgroundColor: props.color}}
      onClick={handleClick}
      onMouseOver={handleHover}
      className={`game-piece ${props.preview && 'preview'}`} >
    </div>
  )
}

export default GamePiece
