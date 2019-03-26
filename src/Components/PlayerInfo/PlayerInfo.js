import React from 'react'

function PlayerInfo(props) {

  let handleClick = () => {
    props.changePlayerColor(props.playerNum, props.newColor)
  }

  // let handleHover = () => {
  //   props.previewSelection(props.column)
  // }

  return (
    <div className="player-info">
      <p>{props.name}</p>
      <div style={{backgroundColor:props.color}} onClick={handleClick} className="circle"></div>
    </div>
  )
}

export default PlayerInfo
