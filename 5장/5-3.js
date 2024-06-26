function maxMeetings(meetings) {
  // 종료 시간으로 정렬
  meetings.sort((a, b) => a[1] - b[1]);

  let currentMeeting = meetings[0];
  let count = 1;

  for (let i = 1; i < meetings.length; i++) {
    // 다음 미팅의 시작 시간이 현재 미팅의 종료 시간보다 늦거나 같으면
    // 예약하고 현재 미팅을 업데이트합니다
    if (meetings[i][0] >= currentMeeting[1]) {
      currentMeeting = meetings[i];
      count++;
    }
  }

  return count;
}

let meetings = [
  [0, 2],
  [1, 3],
  [2, 4],
  [3, 5],
  [4, 6],
];
console.log(maxMeetings(meetings)); // 결과: 3
