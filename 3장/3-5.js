function checkSecretCodes(codes, targets) {
  let result = [];
  for (let i = 0; i < targets.length; i++) {
    let foundIndexes = [];
    for (let j = 0; j < codes.length; j++) {
      if (codes[j] === targets[i]) {
        foundIndexes.push(j);
      }
    }
    result.push(foundIndexes);
  }
  return result;
}

let secretCodes = [
  0, 29, 5, 1, 3, 6, 92, 208, 39, 5, 6, 9, 29, 58, 22, 110, 92, 95, 91, 2,
];
let targets = [0, 7, 2, 8, 5]; // 찾아야 하는 비밀 코드
console.log(checkSecretCodes(secretCodes, targets));
