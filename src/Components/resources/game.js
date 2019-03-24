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

    this.player1 = {
      player: 1,
      color: '#D55A49'
    }

    this.player2 = {
      player: 2,
      color: '#CFB961'
    }

    this.currentPlayer = 1;
    this.rowsLeftInColumn = Array(7).fill(5)
  }

  updateBoard(column) {

    if (this.rowsLeftInColumn[column] === -1) return

    let currentPlayer = null;
    if (this.currentPlayer === 1) {
      this.currentPlayer = 2;
      currentPlayer = this.player2
    } else {
      this.currentPlayer = 1;
      currentPlayer = this.player1
    }

    this.board[this.rowsLeftInColumn[column]][column] = {
      color: currentPlayer.color,
      playersMove: currentPlayer.player,
      timeStamp: Date.now(),
    }

    this.rowsLeftInColumn[column] -= 1;
  }

  checkForWinner(board) {

  }

}

export default Game
