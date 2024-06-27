function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const pivot = array[0]; // (1) 피벗으로 첫 번째 원소를 선택
  const left = [];
  const right = [];
  for (let i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)]; // (2) 재귀적으로 연산이 끝날 때까지 반복
}
