function KruskalMST(graph) {
  // ... 앞선 크루스칼 알고리즘의 코드를 이용합니다 ...
}
// 각 도시 간 전선 설치 비용을 나타내는 그래프
const graph = [
  [0, 2, 0, 6, 0],
  [2, 0, 3, 8, 5],
  [0, 3, 0, 0, 7],
  [6, 8, 0, 0, 9],
  [0, 5, 7, 9, 0],
];
const cities = ["서울", "부산", "대구", "인천", "광주"];
const result = KruskalMST(graph);
for (let i = 0; i < result.length; i++) {
  console.log(`${cities[result[i][0]]} 와 ${cities[result[i][1]]} 전선 연결 비
  용: ${result[i][2]}`);
}
