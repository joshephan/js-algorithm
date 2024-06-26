const korean = [
  {
    이름: "이소영",
    주민등록번호: "990825-2305941",
    친구: ["990412-1450372", "970501-2295043", "850410-1928392" /* ... */],
  },
  {
    이름: "박소정",
    주민등록번호: "850410-1928392",
    친구: ["990825-2305941"],
  }
  // ... 다른 사용자 정보들 ...
];

function findFriendOfFriendBFS(name, targetBirthdate) {
  const visited = new Set();
  const queue = [];

  // 이소영을 큐에 추가
  queue.push({
    person: korean.find((person) => person.이름 === name),
    depth: 0,
  });

  while (queue.length !== 0) {
    const { person, depth } = queue.shift();

    if (person) {
      // 현재 사용자의 친구 목록을 확인
      for (const friendId of person.친구) {
        const friend = korean.find((p) => p.주민등록번호 === friendId);

        if (friend && !visited.has(friendId)) {
          visited.add(friendId);

          // 생일을 기준으로 최인기 찾기
          if (friend.주민등록번호.startsWith(targetBirthdate)) {
            return friend;
          }

          // 친구의 친구를 큐에 추가
          queue.push({ person: friend, depth: depth + 1 });
        }
      }
    }
  }

  return null; // 찾지 못한 경우
}

// 이소영의 친구의 친구 중 생일이 1985년 4월 10일인 사용자 찾기
const resultBFS = findFriendOfFriendBFS("이소영", "850410");
console.log(resultBFS);

// 최인기라는 이름을 찾는 코드는 여러분이 추가해보세요!
