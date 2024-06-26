function findMines(field, totalMines) {
  let foundMines = 0;
  let totalCells = field.length * field[0].length;

  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      if (field[i][j] === 1) {
        foundMines++;
        console.log(
          `지뢰 발견! 현재 위치: (${i}, ${j}), 남은 지뢰 확률: ${(
            (totalMines - foundMines) /
            (totalCells - (i * field[i].length + j + 1))
          ).toFixed(2)}`
        );
      }
      if (foundMines === totalMines) {
        console.log("clear");
        return;
      }
    }
  }
}

let field = [
  [0, 0, 0, 1, 0],
  [1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1],
  [0, 0, 1, 0, 0],
];

findMines(field, 5);
