import React from 'react'
import { ChromePicker } from 'react-color';

class PlayerInfo extends React.Component {
  constructor() {

    super()

    this.state = {
      displayColorPicker: false,
    };

  }

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }

  handleColorChange = (color) => {
    this.props.handleColorChangeComplete(this.props.playerNum, color.hex)
  }

  handleNameChange = (event) => {
    this.props.handlePlayerNameChange(this.props.playerNum, event.target.value)
  }

  render() {

    const popover = {
      position: 'absolute',
      zIndex: '100',
    }

    const cover = {
      position: 'fixed',
      opacity: '.5',
      backgroundColor: 'gray',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    }

    return (
      <div className="player-info">

        <ul>
          <li><p>Name: <input type="text" value={this.props.name} onChange={this.handleNameChange} /></p></li>
          <li>
            <p>Color:</p>
            <div style={{backgroundColor:this.props.playerColor}} onClick={this.handleClick} className="circle" />
          </li>
        </ul>



        { this.state.displayColorPicker ?
          <div className="popover" style={ popover }>
            <div className="cover" style={ cover } onClick={ this.handleClose } />
            <ChromePicker
              color={ this.props.playerColor }
              onChangeComplete={ this.handleColorChange }
              disableAlpha={true}/>
          </div>
          : null }
      </div>
    )

  }
}

export default PlayerInfo
