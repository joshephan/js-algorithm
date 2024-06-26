let CLASSROOMS = [4, 7, 2, 5, 10, 13];
let FLOWER_TREES = 3;

CLASSROOMS.sort((a, b) => a - b);

let start = CLASSROOMS[0]; // 왼쪽 끝 교실
let end = CLASSROOMS[CLASSROOMS.length - 1]; //(오른쪽 끝 교실)

let result = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let value = CLASSROOMS[0];
  let count = 1;

  for (let i = 1; i < CLASSROOMS.length; i++) {
    if (CLASSROOMS[i] - value >= mid) {
      value = CLASSROOMS[i];
      count++;
    }
  }

  if (count >= FLOWER_TREES) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

let treePositions = [CLASSROOMS[0]];
let lastPosition = CLASSROOMS[0];

for (let i = 1; i < CLASSROOMS.length; i++) {
  if (CLASSROOMS[i] - lastPosition >= result) {
    treePositions.push(CLASSROOMS[i]);
    lastPosition = CLASSROOMS[i];
  }
}

console.log(treePositions);
