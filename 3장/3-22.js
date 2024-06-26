// 그래프를 표현한 인접 리스트
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E", "F"],
  D: ["B"],
  E: ["C", "G"],
  F: ["C", "E"],
  G: ["E", "H"],
  H: ["G"],
};

// 너비 우선 탐색
function bfs(graph, startNode, targetNode) {
  const visited = {}; // 방문한 정점을 저장할 객체
  const queue = []; // 탐색할 정점을 저장할 큐
  const distances = {}; // 시작 정점으로부터의 거리를 저장할 객체

  visited[startNode] = true; // 시작 정점을 방문 처리
  queue.push(startNode); // 시작 정점을 큐에 추가
  distances[startNode] = 0; // 시작 정점까지의 거리는 0

  while (queue.length > 0) {
    const node = queue.shift(); // 큐에서 정점을 하나씩 추출

    if (node === targetNode) {
      return distances[node]; // 목표 정점에 도달한 경우 거리 반환
    }

    const adjacentNodes = graph[node]; // 인접한 정점들을 가져옴
    for (let i = 0; i < adjacentNodes.length; i++) {
      const adjacentNode = adjacentNodes[i];
      if (!visited[adjacentNode]) {
        // 방문하지 않은 정점인 경우
        visited[adjacentNode] = true; // 방문 처리
        queue.push(adjacentNode); // 큐에 추가
        distances[adjacentNode] = distances[node] + 1; // 거리 업데이트
      }
    }
  }

  return -1; // 탐색 실패 시 -1 반환
}

// 최단 거리 계산 호출 예시
const shortestDistance = bfs(graph, "A", "B");
console.log(`A에서 B까지의 최단 거리: ${shortestDistance}`);
