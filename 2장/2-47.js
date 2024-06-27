// 문자를 숫자로 변환
function convertToNumeric(str) {
  const numericArr = [];
  for (let i = 0; i < str.length; i++) {
    numericArr.push(str.charCodeAt(i)); // (1): 문자열 코드로 변환
  }
  return numericArr;
}
// 기수 정렬 함수
function radixSortString(arr) {
  const maxLen = getMaxStringLength(arr); // 입력 배열에서 가장 긴 문자열의 길이를 구함
  for (let i = maxLen - 1; i >= 0; i--) {
    countingSortString(arr, i);
  }
  return arr;
}
// 문자열의 특정 자리수를 기준으로 계수 정렬하는 함수
function countingSortString(arr, pos) {
  const output = new Array(arr.length).fill("");
  const count = new Array(256).fill(0); // ASCII 문자 범위에 따라 적절한 크기로 설정
  for (let i = 0; i < arr.length; i++) {
    const charCode = pos < arr[i].length ? arr[i].charCodeAt(pos) : 0;
    count[charCode]++;
  }
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    const charCode = pos < arr[i].length ? arr[i].charCodeAt(pos) : 0;
    output[count[charCode] - 1] = arr[i];
    count[charCode]--;
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }
}
// 입력 배열에서 가장 긴 문자열의 길이를 구하는 함수
function getMaxStringLength(arr) {
  let maxLen = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLen) {
      maxLen = arr[i].length;
    }
  }
  return maxLen;
}
