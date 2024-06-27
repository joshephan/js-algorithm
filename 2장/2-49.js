const items = [
  { key: "하늘", value: 10 },
  { key: "바람", value: 5 },
  { key: "구름", value: 8 },
];
// value 기준으로 정렬
items.sort((a, b) => {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  // a는 b와 같아야 한다
  return 0;
});
