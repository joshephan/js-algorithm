function solveNKnight(n) {
  let board = Array(n)
    .fill()
    .map(() => Array(n).fill(false));
  let solutions = [];

  let dx = [-2, -1, 1, 2, -2, -1, 1, 2];
  let dy = [1, 2, 2, 1, -1, -2, -2, -1];

  function isAttack(i, j) {
    for (let k = 0; k < 8; k++) {
      let x = i + dx[k];
      let y = j + dy[k];
      if (x >= 0 && y >= 0 && x < n && y < n && board[x][y]) {
        return true;
      }
    }
    return false;
  }

  function solve(row) {
    if (row === n) {
      solutions.push(
        board.map((row) => row.map((col) => (col ? "K" : ".")).join(""))
      );
      return;
    }

    for (let col = 0; col < n; col++) {
      if (!isAttack(row, col)) {
        board[row][col] = true;
        if (solve(row + 1)) {
          return true;
        }
        board[row][col] = false;
      }
    }
    return false;
  }

  solve(0);
  return solutions;
}

console.log(solveNKnight(4));
