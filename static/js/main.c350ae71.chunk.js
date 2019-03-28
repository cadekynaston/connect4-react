(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{261:function(e,t,n){},262:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(89),l=n.n(o),i=(n(96),n(12)),s=n(13),c=n(18),u=n(17),h=n(19),m=n(3);var p=function(e){return r.a.createElement("div",{style:{backgroundColor:e.color},onClick:function(){e.columnClick(e.column)},onMouseOver:function(){e.previewSelection(e.column)},className:"game-piece ".concat(e.preview?"preview":""," ").concat(e.winningMove?"winning-move":"")})};var v=function(e){var t=e.game.board.map(function(t,n){return t.map(function(t,a){var o=e.game.previewCell.row===n&&e.game.previewCell.column===a,l=null!==t.playersMove?e.game.players[t.playersMove].color:o?e.game.players[e.game.currentPlayer].color:t.color;return r.a.createElement(p,{key:"".concat(n).concat(a),column:a,row:n,color:l,columnClick:e.selectColumn,previewSelection:e.previewSelection,preview:o,winningMove:t.winningMove})})});return r.a.createElement("div",{className:"game-board"},t)},C=n(90),d=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).handleClose=function(){e.setState({displayColorPicker:!1})},e.handleClick=function(){e.setState({displayColorPicker:!e.state.displayColorPicker})},e.handleColorChange=function(t){e.props.handleColorChangeComplete(e.props.playerNum,t.hex)},e.state={displayColorPicker:!1},e.handleClose=e.handleClose.bind(Object(m.a)(Object(m.a)(e))),e.handleClick=e.handleClick.bind(Object(m.a)(Object(m.a)(e))),e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"player-info"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",null,"Name: ",this.props.name)),r.a.createElement("li",null,r.a.createElement("p",null,"Color:"),r.a.createElement("div",{style:{backgroundColor:this.props.playerColor},onClick:this.handleClick,className:"circle"}))),this.state.displayColorPicker?r.a.createElement("div",{className:"popover",style:{position:"absolute",zIndex:"100"}},r.a.createElement("div",{className:"cover",style:{position:"fixed",opacity:".5",backgroundColor:"gray",top:"0px",right:"0px",bottom:"0px",left:"0px"},onClick:this.handleClose}),r.a.createElement(C.ChromePicker,{color:this.props.playerColor,onChangeComplete:this.handleColorChange,disableAlpha:!0})):null)}}]),t}(r.a.Component);var f=function(e){var t=e.game.tieGame?"It's a tie":e.game.winner?"".concat(e.game.players[e.game.currentPlayer].name," wins!"):"".concat(e.game.players[e.game.currentPlayer].name,"'s turn");return r.a.createElement("div",{className:"game-info"},r.a.createElement("h1",null,"Connect 4\xa0",r.a.createElement("span",{style:{color:"#61DAFB"}},"React")),r.a.createElement("h2",null,t),r.a.createElement("div",{className:"player-info-container"},r.a.createElement(d,{playerNum:0,playerColor:e.game.players[0].color,name:e.game.players[0].name,handleColorChangeComplete:e.handleColorChangeComplete}),r.a.createElement(d,{playerNum:1,playerColor:e.game.players[1].color,name:e.game.players[1].name,handleColorChangeComplete:e.handleColorChangeComplete})),r.a.createElement("button",{onClick:e.restartGame},"Reset"))},y=function(){function e(){Object(i.a)(this,e),this.board=[];for(var t=0;t<6;t++){for(var n=[],a=0;a<7;a++)n.push({color:"#FFF",row:t,column:a,playersMove:null,winningMove:!1});this.board.push(n)}this.players=[{name:"Player 1",color:"#E0523F"},{name:"Player 2",color:"#F5DB72"}],this.previewCell={column:null,row:null},this.winningMoves=null,this.currentPlayer=0,this.winner=!1,this.tieGame=!1,this.rowsLeftInColumn=Array(7).fill(5)}return Object(s.a)(e,[{key:"updateBoard",value:function(e){var t=this;-1!==this.rowsLeftInColumn[e]&&(this.board[this.rowsLeftInColumn[e]][e]={color:this.players[this.currentPlayer].color,playersMove:this.currentPlayer,timeStamp:Date.now()},this.rowsLeftInColumn[e]-=1,this.previewCell={column:null,row:null},this.checkForWinner()?this.winningMoves.forEach(function(e){t.board[e[0]][e[1]].winningMove=!0}):this.rowsLeftInColumn.every(function(e){return-1===e})?this.tieGame=!0:this.updateCurrentPlayer())}},{key:"previewSelection",value:function(e){-1!==this.rowsLeftInColumn[e]&&(this.previewCell={row:this.rowsLeftInColumn[e],column:e})}},{key:"updateCurrentPlayer",value:function(){this.currentPlayer=this.currentPlayer?0:1}},{key:"checkForWinner",value:function(){for(var e=0;e<3;e++)for(var t=0;t<7;t++)if(this.vertical(e,t))return this.winner=!0,!0;for(var n=0;n<6;n++)for(var a=0;a<4;a++)if(this.horizontal(n,a))return this.winner=!0,!0;for(var r=0;r<3;r++)for(var o=0;o<4;o++)if(this.downRight(r,o))return this.winner=!0,!0;for(var l=0;l<3;l++)for(var i=3;i<7;i++)if(this.downLeft(l,i))return this.winner=!0,!0}},{key:"vertical",value:function(e,t){for(var n=[[e,t]],a=1;a<4;a++){if(null===this.board[e][t].playersMove||this.board[e][t].playersMove!==this.board[e+a][t].playersMove)return!1;n.push([e+a,t])}return this.winningMoves=n,!0}},{key:"horizontal",value:function(e,t){for(var n=[[e,t]],a=1;a<4;a++){if(null===this.board[e][t].playersMove||this.board[e][t].playersMove!==this.board[e][t+a].playersMove)return!1;n.push([e,t+a])}return this.winningMoves=n,!0}},{key:"downRight",value:function(e,t){for(var n=[[e,t]],a=1;a<4;a++){if(null===this.board[e][t].playersMove||this.board[e][t].playersMove!==this.board[e+a][t+a].playersMove)return!1;n.push([e+a,t+a])}return this.winningMoves=n,!0}},{key:"downLeft",value:function(e,t){for(var n=[[e,t]],a=1;a<4;a++){if(null===this.board[e][t].playersMove||this.board[e][t].playersMove!==this.board[e+a][t-a].playersMove)return!1;n.push([e+a,t-a])}return this.winningMoves=n,!0}}]),e}(),w=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={game:new y},e.selectColumn=e.selectColumn.bind(Object(m.a)(Object(m.a)(e))),e.previewSelection=e.previewSelection.bind(Object(m.a)(Object(m.a)(e))),e.handleColorChangeComplete=e.handleColorChangeComplete.bind(Object(m.a)(Object(m.a)(e))),e.restartGame=e.restartGame.bind(Object(m.a)(Object(m.a)(e))),e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"selectColumn",value:function(e){this.state.game.winner||this.state.game.tieGame||(this.state.game.updateBoard(e),this.setState(function(e){return e}),this.previewSelection(e))}},{key:"previewSelection",value:function(e){this.state.game.winner||(this.state.game.previewSelection(e),this.setState(function(e){return e}))}},{key:"handleColorChangeComplete",value:function(e,t){this.setState(function(n){return n.game.players[e].color=t,n})}},{key:"restartGame",value:function(){this.setState({game:new y})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(v,{selectColumn:this.selectColumn,previewSelection:this.previewSelection,game:this.state.game}),r.a.createElement(f,{restartGame:this.restartGame,handleColorChangeComplete:this.handleColorChangeComplete,game:this.state.game}))}}]),t}(r.a.Component),g=(n(261),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,null))}}]),t}(a.Component));l.a.render(r.a.createElement(g,null),document.getElementById("root"))},91:function(e,t,n){e.exports=n(262)},96:function(e,t,n){}},[[91,1,2]]]);
//# sourceMappingURL=main.c350ae71.chunk.js.map