// 랜덤한 위스키 도수를 담고 있는 배열
let whiskeys = Array.from({ length: 100 }, () => Math.random() * 100 + 1);
console.log(`정돈 안된 위스키들: ${whiskeys}`);

// 바텐더에게 남은 시간
let availableTime = 30;
function heapify(arr, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
  availableTime -= 1; // 시간 감소
}
let n = whiskeys.length;
// 최댓값 찾기
for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
  heapify(whiskeys, n, i);
  if (availableTime <= 0) {
    break;
  }
}
// 최솟값 찾기
for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
  heapify(whiskeys, n, i);
  if (availableTime <= 0) {
    break;
  }
}
console.log(`급하게 정돈한 위스키: ${whiskeys}`);
console.log(`도수가 가장 높은 위스키: ${whiskeys[0]}`);
console.log(`도수가 가장 낮은 위스키: ${whiskeys[whiskeys.length - 1]}`);
