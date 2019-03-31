(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{260:function(e,n,a){},261:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(88),l=a.n(o),i=(a(95),a(11)),s=a(12),c=a(17),u=a(16),m=a(18);var h=function(e){return r.a.createElement("div",{style:{backgroundColor:e.color},onClick:function(){e.columnClick(e.column)},onMouseOver:function(){e.previewSelection(e.column)},className:"game-piece ".concat(e.preview?"preview":""," ").concat(e.winningMove?"winning-move":"")})};var p=function(e){var n=e.game.board.map(function(n,a){return n.map(function(n,t){var o=e.game.previewCell.row===a&&e.game.previewCell.column===t,l=null!==n.playersMove?e.game.players[n.playersMove].color:o?e.game.players[e.game.currentPlayer].color:n.color;return r.a.createElement(h,{key:"".concat(a).concat(t),column:t,row:a,color:l,columnClick:e.selectColumn,previewSelection:e.previewSelection,preview:o,winningMove:n.winningMove})})});return r.a.createElement("div",{className:"game-board"},n)},v=a(89),y=function(e){function n(){var e;return Object(i.a)(this,n),(e=Object(c.a)(this,Object(u.a)(n).call(this))).handleClose=function(){e.setState({displayColorPicker:!1})},e.handleClick=function(){e.setState({displayColorPicker:!e.state.displayColorPicker})},e.handleColorChange=function(n){e.props.handleColorChangeComplete(e.props.playerNum,n.hex)},e.handleNameChange=function(n){e.props.handlePlayerNameChange(e.props.playerNum,n.target.value)},e.state={displayColorPicker:!1},e}return Object(m.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"player-info"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",null,"Name ",r.a.createElement("input",{type:"text",value:this.props.name,onChange:this.handleNameChange}))),r.a.createElement("li",null,r.a.createElement("p",null,"Color"),r.a.createElement("div",{style:{backgroundColor:this.props.playerColor},onClick:this.handleClick,className:"circle"}))),this.state.displayColorPicker?r.a.createElement("div",{className:"popover",style:{position:"absolute",zIndex:"100"}},r.a.createElement("div",{className:"cover",style:{position:"fixed",opacity:".5",backgroundColor:"gray",top:"0px",right:"0px",bottom:"0px",left:"0px"},onClick:this.handleClose}),r.a.createElement(v.ChromePicker,{color:this.props.playerColor,onChangeComplete:this.handleColorChange,disableAlpha:!0})):null)}}]),n}(r.a.Component);var C=function(e){var n=e.game.tieGame?"It's a tie":e.game.winner?"".concat(e.game.players[e.game.currentPlayer].name," wins!"):"".concat(e.game.players[e.game.currentPlayer].name,"'s turn");return r.a.createElement("div",{className:"game-info"},r.a.createElement("h1",null,"Connect 4\xa0",r.a.createElement("span",{style:{color:"#61DAFB"}},"React")),r.a.createElement("h2",null,n),r.a.createElement("div",{className:"player-info-container"},r.a.createElement(y,{playerNum:0,playerColor:e.game.players[0].color,name:e.game.players[0].name,handleColorChangeComplete:e.handleColorChangeComplete,handlePlayerNameChange:e.handlePlayerNameChange}),r.a.createElement(y,{playerNum:1,playerColor:e.game.players[1].color,name:e.game.players[1].name,handleColorChangeComplete:e.handleColorChangeComplete,handlePlayerNameChange:e.handlePlayerNameChange})),r.a.createElement("button",{onClick:e.restartGame},"Reset"))},f=function(){function e(){Object(i.a)(this,e),this.board=[];for(var n=0;n<6;n++){for(var a=[],t=0;t<7;t++)a.push({color:"#FFF",row:n,column:t,playersMove:null,winningMove:!1});this.board.push(a)}this.players=[{name:"Player 1",color:"#E0523F"},{name:"Player 2",color:"#F5DB72"}],this.previewCell={column:null,row:null},this.winningMoves=null,this.currentPlayer=0,this.winner=!1,this.tieGame=!1,this.rowsLeftInColumn=Array(7).fill(5)}return Object(s.a)(e,[{key:"updateBoard",value:function(e){var n=this;-1!==this.rowsLeftInColumn[e]&&(this.board[this.rowsLeftInColumn[e]][e]={color:this.players[this.currentPlayer].color,playersMove:this.currentPlayer,timeStamp:Date.now()},this.rowsLeftInColumn[e]-=1,this.previewCell={column:null,row:null},this.checkForWinner()?this.winningMoves.forEach(function(e){n.board[e[0]][e[1]].winningMove=!0}):this.rowsLeftInColumn.every(function(e){return-1===e})?this.tieGame=!0:this.updateCurrentPlayer())}},{key:"previewSelection",value:function(e){-1!==this.rowsLeftInColumn[e]&&(this.previewCell={row:this.rowsLeftInColumn[e],column:e})}},{key:"updateCurrentPlayer",value:function(){this.currentPlayer=this.currentPlayer?0:1}},{key:"checkForWinner",value:function(){for(var e=0;e<3;e++)for(var n=0;n<7;n++)if(this.vertical(e,n))return this.winner=!0,!0;for(var a=0;a<6;a++)for(var t=0;t<4;t++)if(this.horizontal(a,t))return this.winner=!0,!0;for(var r=0;r<3;r++)for(var o=0;o<4;o++)if(this.downRight(r,o))return this.winner=!0,!0;for(var l=0;l<3;l++)for(var i=3;i<7;i++)if(this.downLeft(l,i))return this.winner=!0,!0}},{key:"vertical",value:function(e,n){for(var a=[[e,n]],t=1;t<4;t++){if(null===this.board[e][n].playersMove||this.board[e][n].playersMove!==this.board[e+t][n].playersMove)return!1;a.push([e+t,n])}return this.winningMoves=a,!0}},{key:"horizontal",value:function(e,n){for(var a=[[e,n]],t=1;t<4;t++){if(null===this.board[e][n].playersMove||this.board[e][n].playersMove!==this.board[e][n+t].playersMove)return!1;a.push([e,n+t])}return this.winningMoves=a,!0}},{key:"downRight",value:function(e,n){for(var a=[[e,n]],t=1;t<4;t++){if(null===this.board[e][n].playersMove||this.board[e][n].playersMove!==this.board[e+t][n+t].playersMove)return!1;a.push([e+t,n+t])}return this.winningMoves=a,!0}},{key:"downLeft",value:function(e,n){for(var a=[[e,n]],t=1;t<4;t++){if(null===this.board[e][n].playersMove||this.board[e][n].playersMove!==this.board[e+t][n-t].playersMove)return!1;a.push([e+t,n-t])}return this.winningMoves=a,!0}}]),e}(),d=function(e){function n(){var e;return Object(i.a)(this,n),(e=Object(c.a)(this,Object(u.a)(n).call(this))).selectColumn=function(n){e.state.game.winner||e.state.game.tieGame||(e.setState(function(e){return e.game.updateBoard(n),e}),e.previewSelection(n))},e.previewSelection=function(n){e.state.game.winner||e.setState(function(e){return e.game.previewSelection(n),e})},e.handleColorChangeComplete=function(n,a){e.setState(function(e){return e.game.players[n].color=a,e})},e.handlePlayerNameChange=function(n,a){e.setState(function(e){return e.game.players[n].name=a,e})},e.restartGame=function(){e.setState({game:new f})},e.state={game:new f},e}return Object(m.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(p,{selectColumn:this.selectColumn,previewSelection:this.previewSelection,game:this.state.game}),r.a.createElement(C,{restartGame:this.restartGame,handleColorChangeComplete:this.handleColorChangeComplete,handlePlayerNameChange:this.handlePlayerNameChange,game:this.state.game}))}}]),n}(r.a.Component),g=(a(260),function(e){function n(){return Object(i.a)(this,n),Object(c.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(d,null))}}]),n}(t.Component));l.a.render(r.a.createElement(g,null),document.getElementById("root"))},90:function(e,n,a){e.exports=a(261)},95:function(e,n,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.ebb8114b.chunk.js.map