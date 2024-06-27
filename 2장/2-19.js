function insertionSort(units) {
  for (let i = 1; i < units.length; i++) {
    let key = units[i];
    let j = i - 1;
    // 공격력을 기준으로 정렬
    while (j >= 0 && units[j].attack > key.attack) {
      units[j + 1] = units[j];
      j = j - 1;
    }
    units[j + 1] = key;
  }
  return units;
}
let units = [
  { name: "질럿", attack: 16 },
  { name: "드라군", attack: 20 },
  { name: "하이템플러", attack: 0 },
  { name: "다크템플러", attack: 40 },
  { name: "리버", attack: 100 },
  { name: "아칸", attack: 30 },
];
console.log(insertionSort(units));
