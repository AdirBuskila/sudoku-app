// src/components/SudokuSolver.js

class SudokuSolver {
  constructor(board) {
    // Make a deep copy of the board to avoid modifying the original
    this.board = board.map(row => [...row]);
  }

  isValid(row, col, num) {
    for (let i = 0; i < 9; i++) {
      if (this.board[row][i] === num || this.board[i][col] === num) {
        return false;
      }
    }
    const rowSub = Math.floor(row / 3) * 3;
    const colSub = Math.floor(col / 3) * 3;
    for (let i = rowSub; i < rowSub + 3; i++) {
      for (let j = colSub; j < colSub + 3; j++) {
        if (this.board[i][j] === num) {
          return false;
        }
      }
    }
    return true;
  }

  findEmpty() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (this.board[i][j] === 0) {
          return [i, j];
        }
      }
    }
    return null;
  }

  solveRecursive() {
    const emptySpot = this.findEmpty();
    if (!emptySpot) return true;

    const [row, col] = emptySpot;
    for (let num = 1; num <= 9; num++) {
      if (this.isValid(row, col, num)) {
        this.board[row][col] = num;
        if (this.solveRecursive()) return true;
        this.board[row][col] = 0;
      }
    }
    return false;
  }

  solve() {
    const solved = this.solveRecursive();
    return solved ? this.board : false;
  }
}

export default SudokuSolver;
