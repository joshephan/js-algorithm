function maxSeries(series, timeLimit) {
  // Sort series by total time
  series.sort((a, b) => a.time - b.time);

  let count = 0;
  let currentTime = 0;

  for (let i = 0; i < series.length; i++) {
    // If the total time to read the series is within the remaining time, read it
    if (currentTime + series[i].time <= timeLimit) {
      currentTime += series[i].time;
      count++;
    } else {
      // If not, break the loop
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
