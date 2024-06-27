function addLoopCount(n) {
  let count = 0;
  for (let i = 0; i < n * n; i++) {
    count += 1;
  }
  return count;
}
