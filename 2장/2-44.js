function radixSort(arr) {
  const countingSort = (arr, exp) => {
    const output = new Array(arr.length).fill(0);
    const count = new Array(10).fill(0);
    arr.forEach((num) => {
      const digit = Math.floor(num / exp) % 10;
      count[digit]++; // 첫번째 순환에서 1의 자리 숫자만 저장
    });
    for (let i = 1; i < count.length; i++) {
      count[i] += count[i - 1];
    }
    for (let i = arr.length - 1; i >= 0; i--) {
      const digit = Math.floor(arr[i] / exp) % 10; // 109 > 1의 자리: 9
      output[count[digit] - 1] = arr[i]; // count[9]: 6, output[5] = 109
      count[digit]--; // count[9]: 6 - 1 = 5
    }
    output.forEach((num, i) => {
      arr[i] = num;
    });
    console.log(`${exp}자리수 연산: `, arr);
  };
  const max = Math.max(...arr);
  const maxDigit = Math.floor(Math.log10(max) + 1); // 최대 자릿값
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSort(arr, exp);
  }
  return arr;
}

console.log(radixSort([25, 37, 1, 7, 109, 599, 2000]));
