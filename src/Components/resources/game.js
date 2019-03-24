class Game {

  constructor() {

    this.board = [];
    for (let i = 0; i < 6; i++) {
      let column = [];
      for (let j = 0; j < 7; j++) {
        column.push({
          color: '#FFF',
          row: i,
          column: j,
          playersMove: null
        })
      }
      this.board.push(column);
    }

    this.players = [
      {
        color: '#D55A49'
      }, {
        color: '#CFB961'
      }
    ]

    this.currentPlayer = 0;
    this.winner = false
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
    if (this.checkForWinner()) return
    this.updateCurrentPlayer();
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
    for(let i = 1; i < 4; i++) {
      if (this.board[column][row].playersMove === null || this.board[column][row].playersMove !== this.board[column + i][row].playersMove) {
        return false
      }
    }
    return true
  }


  horizontal(column, row) {
    for(let i = 1; i < 4; i++) {
      if (this.board[column][row].playersMove === null || this.board[column][row].playersMove !== this.board[column][row + i].playersMove) {
        return false
      }
    }
    return true
  }

  downRight(column, row) {
    for(let i = 1; i < 4; i++) {
      if (this.board[column][row].playersMove === null || this.board[column][row].playersMove !== this.board[column + i][row + i].playersMove) {
        return false
      }
    }
    return true
  }

  downLeft(column, row) {
    for(let i = 1; i < 4; i++) {
      if (this.board[column][row].playersMove === null || this.board[column][row].playersMove !== this.board[column + i][row - i].playersMove) {
        return false
      }
    }
    return true
  }

}

export default Game
