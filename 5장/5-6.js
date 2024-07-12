function maxValues(items, weightLimit) {
  items.sort((a, b) => b.value / b.weight - a.value / a.weight);

  let totalValue = 0;
  let currentWeight = 0;

  for (let item of items) {
    if (currentWeight + item.weight <= weightLimit) {
      currentWeight += item.weight;
      totalValue += item.value;
    } else {
      let remainingWeight = weightLimit - currentWeight;
      totalValue += item.value * (remainingWeight / item.weight);
      break;
    }
  }

  return totalValue;
}

let items = [
  { name: "책", weight: 1, value: 6000 },
  { name: "노트북", weight: 3, value: 20000 },
  { name: "카메라", weight: 2, value: 15000 },
  { name: "옷", weight: 2, value: 8000 },
];
let weightLimit = 5;

console.log(maxValues(items, weightLimit)); // 결과: 35000
