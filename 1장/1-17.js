function addLoopCount(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    // 1번 반복문
    for (let i = 0; i < 10 * n; i++) {
      // 2번 반복문
      count += 1;
    }
  }
  return count;
}
