function radixSort(arr, key) {
  const maxNum = Math.max(...arr.map((obj) => obj[key])) * 10;
  let divisor = 10;
  while (divisor < maxNum) {
    let buckets = [...Array(10)].map(() => []);
    for (let num of arr) {
      buckets[Math.floor((num[key] % divisor) / (divisor / 10))].push(num);
    }
    arr = [].concat.apply([], buckets);
    divisor *= 10;
  }
  return arr;
}
let students = [
  { grade: 1, class: 1, number: 1, studyTime: 120 },
  { grade: 1, class: 1, number: 2, studyTime: 150 },
  { grade: 1, class: 2, number: 1, studyTime: 90 },
  { grade: 1, class: 2, number: 2, studyTime: 130 },
  { grade: 2, class: 1, number: 1, studyTime: 60 },
  { grade: 2, class: 1, number: 2, studyTime: 110 },
  { grade: 2, class: 2, number: 1, studyTime: 100 },
  { grade: 2, class: 2, number: 2, studyTime: 80 },
  { grade: 3, class: 1, number: 1, studyTime: 30 },
  { grade: 3, class: 1, number: 2, studyTime: 90 },
];
console.log(radixSort(students, "studyTime"));
