function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

let bookISBNs = [
  9788996094050, 9788996094067, 9788996094074, 9788996094081, 9788996094098,
];
console.log(binarySearch(bookISBNs, 9788996094074)); // 책의 위치 인덱스: 2
