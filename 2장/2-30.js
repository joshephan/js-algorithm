function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

// 합병 함수
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// 랜덤한 숫자가 무작위로 설정된 배열 생성
let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100) + 1);
}

// 배열 합병 정렬
let sortedArr = mergeSort(arr);

// 정렬한 배열을 특정 패턴으로 출력
let lineCount = 1;
let index = 0;
while (index < sortedArr.length) {
  let line = "";
  for (let i = 0; i < lineCount; i++) {
    if (index < sortedArr.length) {
      line += sortedArr[index] + " ";
    } else {
      line += sortedArr[sortedArr.length - 1] + " "; // 마지막 숫자 출력
    }
    index++;
  }
  console.log(`총 ${line}줄`);
  lineCount++;
}
