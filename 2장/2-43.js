// 입력 배열의 최댓값
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
function radixSort(arr) {
  const max = findMax(arr); // 입력 배열의 최댓값을 찾음
  // 자릿수 별 기수 정렬
  function countingSort(arr, exp) {
    const count = new Array(10).fill(0);
    const output = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
      const digit = Math.floor(arr[i] / exp) % 10;
      count[digit]++;
    }
    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }
    for (let i = arr.length - 1; i >= 0; i--) {
      const digit = Math.floor(arr[i] / exp) % 10;
      output[count[digit] - 1] = arr[i];
      count[digit]--;
    }
    for (let i = 0; i < arr.length; i++) {
      arr[i] = output[i];
    }
  }
  // 가장 큰 자릿수부터 시작하여 기수 정렬을 반복적으로 수행하는 함수
  function radixSortUtil(arr) {
    const len = arr.length;
    const maxDigit = Math.floor(Math.log10(max) + 1); // 최대 자릿수
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
      countingSort(arr, exp);
    }
  }
  radixSortUtil(arr);
  return arr;
}
