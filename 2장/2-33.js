const MAX_FOOD_COUNT = 4; // 최대 먹을 수 있는 음식의 수
const PROTEIN_LIST = [5, 15, 22, 36, 46, 48, 59]; // 각 음식의 단백질 함량
const PRICE_LIST = [3000, 4100, 4500, 5000, 5600, 5900]; // 각 음식의 가격
let budget = 15000; // 철수의 예산
// 각 음식의 가격 대비 단백질 함량을 계산
let ratioList = PROTEIN_LIST.map((protein, index) => {
  return {
    index: index,
    ratio: protein / PRICE_LIST[index],
  };
});
// 퀵 정렬 함수 정의
function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivot = partition(array, left, right);
    quickSort(array, left, pivot - 1);
    quickSort(array, pivot + 1, right);
  }
  return array;
}
// 피벗 설정 함수 정의
function partition(array, left, right) {
  let pivot = array[right].ratio;
  let i = left;
  for (let j = left; j < right; j++) {
    if (array[j].ratio > pivot) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
    }
  }
  [array[i], array[right]] = [array[right], array[i]];
  return i;
}
// 가격 대비 단백질 함량이 높은 음식부터 퀵 정렬
quickSort(ratioList);
let totalProtein = 0; // 총 단백질 함량
let foodCount = 0; // 선택한 음식의 개수
// 예산 내에서 가장 단백질 함량이 높은 음식부터 선택
for (let i = 0; i < ratioList.length; i++) {
  if (budget >= PRICE_LIST[ratioList[i].index]) {
    budget -= PRICE_LIST[ratioList[i].index];
    totalProtein += PROTEIN_LIST[ratioList[i].index];
    foodCount++;
    if (foodCount === MAX_FOOD_COUNT) {
      break;
    }
  }
}
console.log(totalProtein); // 철수가 섭취할 수 있는 최대 단백질 함량, 99
