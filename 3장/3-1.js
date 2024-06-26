const dictionary = [
  {
    word: "a",
    mean: "라틴 문자의 첫번째 글자",
  },
  // ...
];

function findMean(keyword, array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array.word === keyword) {
      return array.mean;
    }
  }
  return "단어를 찾지 못했습니다.";
}

findMean("a", dictionary);
