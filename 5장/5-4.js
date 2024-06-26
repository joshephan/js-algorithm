const meetings = [
  [0, 2],
  [1, 3],
  [2, 4],
  [3, 5],
  [4, 6],
];

function minMeetings(meetings) {
  // 회의를 종료 시간 기준으로 정렬
  meetings.sort((a, b) => a[1] - b[1]);

  let lastEndTime = -1;
  let count = 0;

  for (const meeting of meetings) {
    if (meeting[0] >= lastEndTime) {
      lastEndTime = meeting[1];
      count++;
    }
  }

  // 전체 회의 수에서 겹치지 않는 회의 수를 뺀 값이 최소 회의 수
  return meetings.length - count;
}

const result = minMeetings(meetings);

console.log(`가장 적게 참석해야 하는 최소 회의 수: ${result}`); // 예상 결과: 2
