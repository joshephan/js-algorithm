const items = [
  { key: "하늘", value: 10 },
  { key: "바람", value: 5 },
  { key: "구름", value: 8 },  // 5, 8, 10
];
// value 기준으로 정렬
items.sort((a, b) => { // compareFunction: 비교 함수 
  if (a.value > b.value) { // a의 인덱스를 b보다 높여주어야 한다
    return 1;
  }
  if (a.value < b.value) { // a의 인덱스를 b보다 작게 만들어주어야 한다
    return -1;
  }
  // a는 b와 같아야 한다
  return 0;
});




