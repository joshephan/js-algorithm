let potion = [5, 8, 6, 1, 9, 3];

// 선택 정렬로 배열을 내림차순으로 정렬
for (let i = 0; i < potion.length; i++) {
  let maxIdx = i;
  for (let j = i + 1; j < potion.length; j++) {
    if (potion[j] > potion[maxIdx]) {
      maxIdx = j;
    }
  }
  [potion[i], potion[maxIdx]] = [potion[maxIdx], potion[i]];
}

console.log(potion); // [9, 8, 6, 5, 3, 1]
