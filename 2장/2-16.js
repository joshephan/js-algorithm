let potion = [5, 8, 6, 1, 9, 3];
let sum = 0;
let result = [];
potion.some((effect, i) => {
  // (1)
  sum = 0;
  result = [];
  for (let j = i; j < potion.length; j++) {
    sum += potion[j];
    result.push(potion[j]);
    if (sum < 15 && j === potion.length - 1) {
      break;
    } else if (sum === 15) {
      return true; // (2)
    } else if (sum > 15) {
      break;
    }
  }
});
if (sum !== 15) {
  console.log("도망친다");
} else {
  console.log(result); // [8, 6, 1]
}
