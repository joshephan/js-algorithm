const dictionary = [
  {
    word: "a",
    mean: "라틴 문자의 첫번째 글자",
  },
  // ...
];

function findMean(keyword, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].word === keyword) {
      return array[i].mean;
    }
  }
  return "단어를 찾지 못했습니다.";
}

console.log(findMean("a", dictionary));






