function heapSort(arr) {
  // 힙을 구성하는 함수
  function buildHeap(arr) {
    const len = arr.length;
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
      heapify(arr, len, i);
    }
  }
  // 힙을 유지하도록 하는 함수
  function heapify(arr, len, idx) {
    let largest = idx;
    const left = 2 * idx + 1;
    const right = 2 * idx + 2;
    if (left < len && arr[left] > arr[largest]) {
      largest = left;
    }
    if (right < len && arr[right] > arr[largest]) {
      largest = right;
    }
    if (largest !== idx) {
      [arr[idx], arr[largest]] = [arr[largest], arr[idx]];
      heapify(arr, len, largest);
    }
  }
  // 정렬을 수행하는 함수
  function sort(arr) {
    const len = arr.length;
    buildHeap(arr);
    for (let i = len - 1; i >= 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapify(arr, i, 0);
    }
    return arr;
  }
  return sort(arr);
}
// 예시
const arr = [6, 3, 8, 2, 10, 5];
const sortedArr = heapSort(arr);
console.log(sortedArr); // [2, 3, 5, 6, 8, 10];
