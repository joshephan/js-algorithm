let cards = [
  ["Diamond", 3],
  ["Heart", "A"],
  ["Clover", "K"],
  ["Spade", 7],
];

function convertToPoint(card) {
  const additionalPoint = {
    Heart: 0,
    Diamond: 13,
    Clover: 13 * 2,
    Spade: 13 * 3,
  };
  const charToNumber = {
    A: 1,
    J: 11,
    Q: 12,
    K: 13,
  };
  return additionalPoint[card[0]] + (typeof card[1] === "number" ? card[1] : charToNumber[card[1]]);
}

function bubbleSort(array) {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (convertToPoint(array[j]) > convertToPoint(array[j + 1])) {
        // Swap elements
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

console.log(bubbleSort(cards));
