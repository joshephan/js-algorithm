const N = 5;
const M = 21;
const cards = [5, 6, 7, 8, 9];
let answer = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      let sum = cards[i] + cards[j] + cards[k];
      if (sum <= M) {
        answer = Math.max(answer, sum);
      }
    }
  }
}

console.log(answer);
