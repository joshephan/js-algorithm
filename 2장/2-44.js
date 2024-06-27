function radixSort(arr) {
  const countingSort = (arr, exp) => {
    const output = new Array(arr.length).fill(0);
    const count = new Array(10).fill(0);
    arr.forEach((num) => {
      const digit = Math.floor(num / exp) % 10;
      count[digit]++;
    });
    for (let i = 1; i < count.length; i++) {
      count[i] += count[i - 1];
    }
    for (let i = arr.length - 1; i >= 0; i--) {
      const digit = Math.floor(arr[i] / exp) % 10;
      output[count[digit] - 1] = arr[i];
      count[digit]--;
    }
    output.forEach((num, i) => {
      arr[i] = num;
    });
  };
  const max = Math.max(...arr);
  const maxDigit = Math.floor(Math.log10(max) + 1);
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSort(arr, exp);
  }
  return arr;
}
