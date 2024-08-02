function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2); // 중간 인덱스 찾기
  const left = arr.slice(0, mid); // 중간 원소보다 작은 값이 모인 배열
  const right = arr.slice(mid); // 중간 원소보다 큰 값이 모인 배열
  const sortedLeft = mergeSort(left); 
  const sortedRight = mergeSort(right); 
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let merged = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }
  while (leftIndex < left.length) {
    merged.push(left[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < right.length) {
    merged.push(right[rightIndex]);
    rightIndex++;
  }
  return merged;
}

// 예시
const array = [5, 9, 2, 8, 11, 5];
const sortedArray = mergeSort(array);