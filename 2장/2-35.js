let deliveryFloors = [5, 2, 8, 6, 1, 9, 3, 20, 18, 42, 43, 15, 7, 11, 5];

// 10층 이상의 층은 5의 배수로 변환
deliveryFloors = deliveryFloors.map((floor) =>
  floor >= 10 ? Math.floor(floor / 5) * 5 : floor
);

// 중복 층 제거
deliveryFloors = [...new Set(deliveryFloors)];

// 퀵 정렬
function quickSort(array) {
  if (array.length < 2) {
    return array;
  }
  const pivot = array[0];
  const less = array.slice(1).filter((i) => i <= pivot);
  const greater = array.slice(1).filter((i) => i > pivot);
  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort(deliveryFloors)); // 오름차순으로 정렬된 층 출력
