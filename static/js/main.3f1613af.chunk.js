(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{261:function(e,a,t){},262:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(89),o=t.n(l),i=(t(96),t(12)),s=t(13),c=t(18),u=t(17),h=t(19),m=t(6);var p=function(e){return r.a.createElement("div",{style:{backgroundColor:e.color},onClick:function(){e.columnClick(e.column)},onMouseOver:function(){e.previewSelection(e.column)},className:"game-piece ".concat(e.preview?"preview":""," ").concat(e.winningMove?"winning-move":"")})};var v=function(e){var a=e.game.board.map(function(a,t){return a.map(function(a,n){var l=e.game.previewCell.row===t&&e.game.previewCell.column===n,o=null!==a.playersMove?e.game.players[a.playersMove].color:l?e.game.players[e.game.currentPlayer].color:a.color;return r.a.createElement(p,{key:"".concat(t).concat(n),column:n,row:t,color:o,columnClick:e.selectColumn,previewSelection:e.previewSelection,preview:l,winningMove:a.winningMove})})});return r.a.createElement("div",{className:"game-board"},a)},C=t(90),y=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(c.a)(this,Object(u.a)(a).call(this))).handleClose=function(){e.setState({displayColorPicker:!1})},e.handleClick=function(){e.setState({displayColorPicker:!e.state.displayColorPicker})},e.handleColorChange=function(a){e.props.handleColorChangeComplete(e.props.playerNum,a.hex)},e.handleNameChange=function(a){e.props.handlePlayerNameChange(e.props.playerNum,a.target.value)},e.state={displayColorPicker:!1},e}return Object(h.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"player-info"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",null,"Name: ",r.a.createElement("input",{type:"text",value:this.props.name,onChange:this.handleNameChange}))),r.a.createElement("li",null,r.a.createElement("p",null,"Color:"),r.a.createElement("div",{style:{backgroundColor:this.props.playerColor},onClick:this.handleClick,className:"circle"}))),this.state.displayColorPicker?r.a.createElement("div",{className:"popover",style:{position:"absolute",zIndex:"100"}},r.a.createElement("div",{className:"cover",style:{position:"fixed",opacity:".5",backgroundColor:"gray",top:"0px",right:"0px",bottom:"0px",left:"0px"},onClick:this.handleClose}),r.a.createElement(C.ChromePicker,{color:this.props.playerColor,onChangeComplete:this.handleColorChange,disableAlpha:!0})):null)}}]),a}(r.a.Component);var d=function(e){var a=e.game.tieGame?"It's a tie":e.game.winner?"".concat(e.game.players[e.game.currentPlayer].name," wins!"):"".concat(e.game.players[e.game.currentPlayer].name,"'s turn");return r.a.createElement("div",{className:"game-info"},r.a.createElement("h1",null,"Connect 4\xa0",r.a.createElement("span",{style:{color:"#61DAFB"}},"React")),r.a.createElement("h2",null,a),r.a.createElement("div",{className:"player-info-container"},r.a.createElement(y,{playerNum:0,playerColor:e.game.players[0].color,name:e.game.players[0].name,handleColorChangeComplete:e.handleColorChangeComplete,handlePlayerNameChange:e.handlePlayerNameChange}),r.a.createElement(y,{playerNum:1,playerColor:e.game.players[1].color,name:e.game.players[1].name,handleColorChangeComplete:e.handleColorChangeComplete,handlePlayerNameChange:e.handlePlayerNameChange})),r.a.createElement("button",{onClick:e.restartGame},"Reset"))},f=function(){function e(){Object(i.a)(this,e),this.board=[];for(var a=0;a<6;a++){for(var t=[],n=0;n<7;n++)t.push({color:"#FFF",row:a,column:n,playersMove:null,winningMove:!1});this.board.push(t)}this.players=[{name:"Player 1",color:"#E0523F"},{name:"Player 2",color:"#F5DB72"}],this.previewCell={column:null,row:null},this.winningMoves=null,this.currentPlayer=0,this.winner=!1,this.tieGame=!1,this.rowsLeftInColumn=Array(7).fill(5)}return Object(s.a)(e,[{key:"updateBoard",value:function(e){var a=this;-1!==this.rowsLeftInColumn[e]&&(this.board[this.rowsLeftInColumn[e]][e]={color:this.players[this.currentPlayer].color,playersMove:this.currentPlayer,timeStamp:Date.now()},this.rowsLeftInColumn[e]-=1,this.previewCell={column:null,row:null},this.checkForWinner()?this.winningMoves.forEach(function(e){a.board[e[0]][e[1]].winningMove=!0}):this.rowsLeftInColumn.every(function(e){return-1===e})?this.tieGame=!0:this.updateCurrentPlayer())}},{key:"previewSelection",value:function(e){-1!==this.rowsLeftInColumn[e]&&(this.previewCell={row:this.rowsLeftInColumn[e],column:e})}},{key:"updateCurrentPlayer",value:function(){this.currentPlayer=this.currentPlayer?0:1}},{key:"checkForWinner",value:function(){for(var e=0;e<3;e++)for(var a=0;a<7;a++)if(this.vertical(e,a))return this.winner=!0,!0;for(var t=0;t<6;t++)for(var n=0;n<4;n++)if(this.horizontal(t,n))return this.winner=!0,!0;for(var r=0;r<3;r++)for(var l=0;l<4;l++)if(this.downRight(r,l))return this.winner=!0,!0;for(var o=0;o<3;o++)for(var i=3;i<7;i++)if(this.downLeft(o,i))return this.winner=!0,!0}},{key:"vertical",value:function(e,a){for(var t=[[e,a]],n=1;n<4;n++){if(null===this.board[e][a].playersMove||this.board[e][a].playersMove!==this.board[e+n][a].playersMove)return!1;t.push([e+n,a])}return this.winningMoves=t,!0}},{key:"horizontal",value:function(e,a){for(var t=[[e,a]],n=1;n<4;n++){if(null===this.board[e][a].playersMove||this.board[e][a].playersMove!==this.board[e][a+n].playersMove)return!1;t.push([e,a+n])}return this.winningMoves=t,!0}},{key:"downRight",value:function(e,a){for(var t=[[e,a]],n=1;n<4;n++){if(null===this.board[e][a].playersMove||this.board[e][a].playersMove!==this.board[e+n][a+n].playersMove)return!1;t.push([e+n,a+n])}return this.winningMoves=t,!0}},{key:"downLeft",value:function(e,a){for(var t=[[e,a]],n=1;n<4;n++){if(null===this.board[e][a].playersMove||this.board[e][a].playersMove!==this.board[e+n][a-n].playersMove)return!1;t.push([e+n,a-n])}return this.winningMoves=t,!0}}]),e}(),g=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(c.a)(this,Object(u.a)(a).call(this))).state={game:new f},e.selectColumn=e.selectColumn.bind(Object(m.a)(Object(m.a)(e))),e.previewSelection=e.previewSelection.bind(Object(m.a)(Object(m.a)(e))),e.handleColorChangeComplete=e.handleColorChangeComplete.bind(Object(m.a)(Object(m.a)(e))),e.handlePlayerNameChange=e.handlePlayerNameChange.bind(Object(m.a)(Object(m.a)(e))),e.restartGame=e.restartGame.bind(Object(m.a)(Object(m.a)(e))),e}return Object(h.a)(a,e),Object(s.a)(a,[{key:"selectColumn",value:function(e){this.state.game.winner||this.state.game.tieGame||(this.state.game.updateBoard(e),this.setState(function(e){return e}),this.previewSelection(e))}},{key:"previewSelection",value:function(e){this.state.game.winner||(this.state.game.previewSelection(e),this.setState(function(e){return e}))}},{key:"handleColorChangeComplete",value:function(e,a){this.setState(function(t){return t.game.players[e].color=a,t})}},{key:"handlePlayerNameChange",value:function(e,a){this.setState(function(t){return t.game.players[e].name=a,t})}},{key:"restartGame",value:function(){this.setState({game:new f})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(v,{selectColumn:this.selectColumn,previewSelection:this.previewSelection,game:this.state.game}),r.a.createElement(d,{restartGame:this.restartGame,handleColorChangeComplete:this.handleColorChangeComplete,handlePlayerNameChange:this.handlePlayerNameChange,game:this.state.game}))}}]),a}(r.a.Component),w=(t(261),function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null))}}]),a}(n.Component));o.a.render(r.a.createElement(w,null),document.getElementById("root"))},91:function(e,a,t){e.exports=t(262)},96:function(e,a,t){}},[[91,1,2]]]);
//# sourceMappingURL=main.3f1613af.chunk.js.map