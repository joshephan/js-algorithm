let arr = [];

for (let i = 0; i < 1000000; i++) {
  let subArr = new Array(100);
  // subArr를 사용하는 코드
  // ...
  subArr = null; // 더 이상 필요하지 않은 메모리 해제
}
