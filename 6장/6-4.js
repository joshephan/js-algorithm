let N = 8;

let sol = [
  [-1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1],
];

let moveX = [2, 1, -1, -2, -2, -1, 1, 2];
let moveY = [1, 2, 2, 1, -1, -2, -2, -1];

function isSafe(x, y, sol) {
  return x >= 0 && x < N && y >= 0 && y < N && sol[x][y] == -1;
}

function printSolution(sol) {
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      console.log(sol[x][y] + " ");
    }
    console.log("\n");
  }
}

function solveKT() {
  sol[0][0] = 0;
  if (!solveKTUtil(0, 0, 1, sol, moveX, moveY)) {
    console.log("Solution does not exist");
    return false;
  } else {
    printSolution(sol);
  }
  return true;
}

function solveKTUtil(x, y, moveI, sol, moveX, moveY) {
  let k, nextX, nextY;
  if (moveI == N * N) return true;
  for (k = 0; k < 8; k++) {
    nextX = x + moveX[k];
    nextY = y + moveY[k];
    if (isSafe(nextX, nextY, sol)) {
      sol[nextX][nextY] = moveI;
      if (solveKTUtil(nextX, nextY, moveI + 1, sol, moveX, moveY)) return true;
      else sol[nextX][nextY] = -1; // 백트레킹
    }
  }
  return false;
}

solveKT();
