(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{260:function(e,t,n){},261:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(88),l=n.n(o),i=(n(95),n(11)),s=n(12),c=n(17),u=n(16),m=n(18);var h=function(e){return r.a.createElement("div",{style:{backgroundColor:e.color},onClick:function(){e.columnClick(e.column)},onMouseOver:function(){e.previewSelection(e.column)},onMouseOut:function(){e.removePreview()},className:"game-piece ".concat(e.preview?"preview":""," ").concat(e.winningMove?"winning-move":"")})};var p=function(e){var t=e.game.board.map(function(t,n){return t.map(function(t,a){var o=e.game.previewCell.row===n&&e.game.previewCell.column===a,l=null!==t.playersMove?e.game.players[t.playersMove].color:o?e.game.players[e.game.currentPlayer].color:t.color;return r.a.createElement(h,{key:"".concat(n).concat(a),column:a,row:n,color:l,columnClick:e.selectColumn,previewSelection:e.previewSelection,removePreview:e.removePreview,preview:o,winningMove:t.winningMove})})});return r.a.createElement("div",{className:"game-board"},t)},v=n(89),f=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).handleClose=function(){e.setState({displayColorPicker:!1})},e.handleClick=function(){e.setState({displayColorPicker:!e.state.displayColorPicker})},e.handleColorChange=function(t){e.props.handleColorChangeComplete(e.props.playerNum,t.hex)},e.handleNameChange=function(t){e.props.handlePlayerNameChange(e.props.playerNum,t.target.value)},e.state={displayColorPicker:!1},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"player-info"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",null,"Name ",r.a.createElement("input",{type:"text",value:this.props.name,onChange:this.handleNameChange}))),r.a.createElement("li",null,r.a.createElement("p",null,"Color"),r.a.createElement("div",{style:{backgroundColor:this.props.playerColor},onClick:this.handleClick,className:"circle"}))),this.state.displayColorPicker?r.a.createElement("div",{className:"popover",style:{position:"absolute",zIndex:"100"}},r.a.createElement("div",{className:"cover",style:{position:"fixed",opacity:".5",backgroundColor:"gray",top:"0px",right:"0px",bottom:"0px",left:"0px"},onClick:this.handleClose}),r.a.createElement(v.ChromePicker,{color:this.props.playerColor,onChangeComplete:this.handleColorChange,disableAlpha:!0})):null)}}]),t}(r.a.Component);var d=function(e){var t=e.game.tieGame?"It's a tie":e.game.winner?"".concat(e.game.players[e.game.currentPlayer].name," wins!"):"".concat(e.game.players[e.game.currentPlayer].name,"'s turn"),n=e.game.players.map(function(t,n){return r.a.createElement(f,{key:n,playerNum:n,playerColor:t.color,name:t.name,handleColorChangeComplete:e.handleColorChangeComplete,handlePlayerNameChange:e.handlePlayerNameChange})});return r.a.createElement("div",{className:"game-info"},r.a.createElement("h1",null,"Connect 4\xa0",r.a.createElement("span",{style:{color:"#61DAFB"}},"React")),r.a.createElement("h2",null,t),r.a.createElement("div",{className:"player-info-container"},n),r.a.createElement("button",{onClick:e.resetBoard},"Reset Board"),r.a.createElement("button",{className:"master",onClick:e.masterReset},"Master Reset"))},y=function(){function e(t){Object(i.a)(this,e),this.board=[];for(var n=0;n<6;n++){for(var a=[],r=0;r<7;r++)a.push({color:"#FFF",row:n,column:r,playersMove:null,winningMove:!1});this.board.push(a)}this.players=t||[{name:"Player 1",color:"#3FDAE0"},{name:"Player 2",color:"#F5DB72"}],this.previewCell={column:null,row:null},this.winningMoves=null,this.currentPlayer=0,this.winner=!1,this.tieGame=!1,this.rowsLeftInColumn=Array(7).fill(5)}return Object(s.a)(e,[{key:"updateBoard",value:function(e){var t=this;-1!==this.rowsLeftInColumn[e]&&(this.board[this.rowsLeftInColumn[e]][e]={color:this.players[this.currentPlayer].color,playersMove:this.currentPlayer,timeStamp:Date.now()},this.rowsLeftInColumn[e]-=1,this.previewCell={column:null,row:null},this.checkForWinner()?this.winningMoves.forEach(function(e){t.board[e[0]][e[1]].winningMove=!0}):this.rowsLeftInColumn.every(function(e){return-1===e})?this.tieGame=!0:this.updateCurrentPlayer())}},{key:"previewSelection",value:function(e){-1!==this.rowsLeftInColumn[e]&&(this.previewCell={row:this.rowsLeftInColumn[e],column:e})}},{key:"updateCurrentPlayer",value:function(){this.currentPlayer=this.currentPlayer?0:1}},{key:"checkForWinner",value:function(){for(var e=0;e<3;e++)for(var t=0;t<7;t++)if(this.vertical(e,t))return this.winner=!0,!0;for(var n=0;n<6;n++)for(var a=0;a<4;a++)if(this.horizontal(n,a))return this.winner=!0,!0;for(var r=0;r<3;r++)for(var o=0;o<4;o++)if(this.downRight(r,o))return this.winner=!0,!0;for(var l=0;l<3;l++)for(var i=3;i<7;i++)if(this.downLeft(l,i))return this.winner=!0,!0}},{key:"vertical",value:function(e,t){for(var n=[[e,t]],a=1;a<4;a++){if(null===this.board[e][t].playersMove||this.board[e][t].playersMove!==this.board[e+a][t].playersMove)return!1;n.push([e+a,t])}return this.winningMoves=n,!0}},{key:"horizontal",value:function(e,t){for(var n=[[e,t]],a=1;a<4;a++){if(null===this.board[e][t].playersMove||this.board[e][t].playersMove!==this.board[e][t+a].playersMove)return!1;n.push([e,t+a])}return this.winningMoves=n,!0}},{key:"downRight",value:function(e,t){for(var n=[[e,t]],a=1;a<4;a++){if(null===this.board[e][t].playersMove||this.board[e][t].playersMove!==this.board[e+a][t+a].playersMove)return!1;n.push([e+a,t+a])}return this.winningMoves=n,!0}},{key:"downLeft",value:function(e,t){for(var n=[[e,t]],a=1;a<4;a++){if(null===this.board[e][t].playersMove||this.board[e][t].playersMove!==this.board[e+a][t-a].playersMove)return!1;n.push([e+a,t-a])}return this.winningMoves=n,!0}}]),e}(),C=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).selectColumn=function(t){e.state.game.winner||e.state.game.tieGame||e.setState(function(e){return e.game.updateBoard(t),e},function(){return e.previewSelection(t)})},e.previewSelection=function(t){e.state.game.winner||e.state.game.tieGame?e.removePreview():e.setState(function(e){return e.game.previewSelection(t),e})},e.removePreview=function(){e.setState(function(e){return e.game.previewCell={column:null,row:null},e})},e.handleColorChangeComplete=function(t,n){e.setState(function(e){return e.game.players[t].color=n,e})},e.handlePlayerNameChange=function(t,n){e.setState(function(e){return e.game.players[t].name=n,e})},e.masterReset=function(){e.setState({game:new y})},e.resetBoard=function(){e.setState(function(e){return{game:new y(e.game.players)}})},e.state={game:new y},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(p,{selectColumn:this.selectColumn,previewSelection:this.previewSelection,removePreview:this.removePreview,game:this.state.game}),r.a.createElement(d,{resetBoard:this.resetBoard,masterReset:this.masterReset,handleColorChangeComplete:this.handleColorChangeComplete,handlePlayerNameChange:this.handlePlayerNameChange,game:this.state.game}))}}]),t}(r.a.Component),g=(n(260),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(C,null),r.a.createElement("p",{className:"git-links"},"Made by\xa0",r.a.createElement("a",{href:"https://github.com/cadekynaston"},"Cade Kynaston")),r.a.createElement("a",{href:"https://github.com/cadekynaston/connect4-react"},"View the code"))}}]),t}(a.Component));l.a.render(r.a.createElement(g,null),document.getElementById("root"))},90:function(e,t,n){e.exports=n(261)},95:function(e,t,n){}},[[90,1,2]]]);
//# sourceMappingURL=main.204452fb.chunk.js.map