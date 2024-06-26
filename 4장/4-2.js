function fibonacci(n) {
  const fibValues = [0, 1]; // 배열을 사용해 이미 계산한 값을 저장

  for (let i = 2; i <= n; i++) {
    fibValues[i] = fibValues[i - 1] + fibValues[i - 2];
  }

  return fibValues[n];
}

const n = 1000;
const fibonacci1000 = fibonacci(n);
console.log(`피보나치 수열의 ${n}번째 값: ${fibonacci1000}`);
