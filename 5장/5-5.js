function maxSeries(series, timeLimit) {
  // 총 시간별로 시리즈 정렬
  series.sort((a, b) => a.time - b.time);

  let count = 0;
  let currentTime = 0;

  for (let i = 0; i < series.length; i++) {
    // 남은 시간 동안 볼 수 있는 경우
    if (currentTime + series[i].time <= timeLimit) {
      currentTime += series[i].time;
      count++;
    } else {
      break;
    }
  }

  return count;
}

let series = [
  { name: "더글로리 시즌2", time: 7.25 },
  { name: "킹덤 시즌2", time: 4.5 },
  { name: "스위트홈 2", time: 9.5 },
  { name: "이태원클라쓰", time: 18.6 },
];
let timeLimit = 20;

console.log(maxSeries(series, timeLimit));
