class Game {

  constructor(players) {

    this.board = [];
    for (let i = 0; i < 6; i++) {
      let column = [];
      for (let j = 0; j < 7; j++) {
        column.push({
          color: '#FFF',
          row: i,
          column: j,
          playersMove: null,
          winningMove: false,
        })
      }
      this.board.push(column);
    }

    if (players) {
      this.players = players
    } else {
      this.players = [
        {
          name: 'Player 1',
          color: '#3FDAE0'
        }, {
          name: 'Player 2',
          color: '#F5DB72'
        }
      ]
    }

    this.previewCell = {
      column: null,
      row: null
    }
    this.winningMoves = null
    this.currentPlayer = 0;
    this.winner = false
    this.tieGame = false
    this.rowsLeftInColumn = Array(7).fill(5)
  }

  updateBoard(column) {

    if (this.rowsLeftInColumn[column] === -1) return

    this.board[this.rowsLeftInColumn[column]][column] = {
      color: this.players[this.currentPlayer].color,
      playersMove: this.currentPlayer,
      timeStamp: Date.now(),
    }

    this.rowsLeftInColumn[column] -= 1;
    this.previewCell = {
      column: null,
      row: null
    }

    if (this.checkForWinner()) {
      this.winningMoves.forEach(move => {
        this.board[move[0]][move[1]].winningMove = true;
      })
      return
    }

    if (this.rowsLeftInColumn.every(col => col === -1)) {
      this.tieGame = true
      return
    }
    this.updateCurrentPlayer();
  }

  previewSelection(column) {

    if (this.rowsLeftInColumn[column] === -1) return
    this.previewCell = {
      row: this.rowsLeftInColumn[column],
      column
    }


  }

  updateCurrentPlayer() {
    this.currentPlayer = this.currentPlayer ? 0 : 1
  }

  checkForWinner() {

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 7; j++) {
        if (this.vertical(i, j)) {
          this.winner = true;
          return true;
        }
      }
    }

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.horizontal(i, j)) {
          this.winner = true;
          return true;
        }
      }
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.downRight(i, j)) {
          this.winner = true;
          return true;
        }
      }
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 3; j < 7; j++) {
        if (this.downLeft(i, j)) {
          this.winner = true;
          return true;
        }
      }
    }
  }

  vertical(column, row) {
    let moves = [[column, row]];
    for(let i = 1; i < 4; i++) {
      if (this.board[column][row].playersMove === null || this.board[column][row].playersMove !== this.board[column + i][row].playersMove) {
        return false
      }
      moves.push([column + i, row])
    }
    this.winningMoves = moves
    return true
  }

  horizontal(column, row) {
    let moves = [[column, row]];
    for(let i = 1; i < 4; i++) {
      if (this.board[column][row].playersMove === null || this.board[column][row].playersMove !== this.board[column][row + i].playersMove) {
        return false
      }
      moves.push([column, row+i])
    }
    this.winningMoves = moves
    return true
  }

  downRight(column, row) {
    let moves = [[column, row]];
    for(let i = 1; i < 4; i++) {
      if (this.board[column][row].playersMove === null || this.board[column][row].playersMove !== this.board[column + i][row + i].playersMove) {
        return false
      }
      moves.push([column+i, row+i])
    }

    this.winningMoves = moves
    return true
  }

  downLeft(column, row) {
    let moves = [[column, row]];
    for(let i = 1; i < 4; i++) {
      if (this.board[column][row].playersMove === null || this.board[column][row].playersMove !== this.board[column + i][row - i].playersMove) {
        return false
      }
      moves.push([column+i, row-i])
    }
    this.winningMoves = moves
    return true
  }
}

export default Game
