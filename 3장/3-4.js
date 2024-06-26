function findSuspect(students, row, shoeColor, nameHint) {
  const suspects = students[row];
  for (let i = 0; i < suspects.length; i++) {
    if (
      suspects[i].shoes === shoeColor &&
      suspects[i].name.endsWith(nameHint)
    ) {
      return suspects[i];
    }
  }
  return null;
}

const students = [
  // 1 ~ 9번째 줄 학생 정보 생략...
  [
    { name: "철수", shoes: "red" },
    { name: "영희", shoes: "blue" },
    { name: "민수", shoes: "blue" },
    { name: "지민", shoes: "black" },
    { name: "태현", shoes: "blue" },
    { name: "승우", shoes: "green" },
    // ... 나머지 학생 정보 생략
  ],
  // 11 ~ n번째 줄 학생 정보 생략...
];

console.log(findSuspect(students, 9, "blue", "수"));
