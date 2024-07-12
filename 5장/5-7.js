let S = "abcd";
let left = 0;
let right = S.length - 1;
let moveCount = 0;

while (left < right) {
  if (S[left] === S[right]) {
    left++;
    right--;
  } else if (S[left] < S[right]) {
    right--;
    moveCount += 1;
  } else {
    left++;
    moveCount += 1;
  }
}

console.log(moveCount); // 출력: 3
