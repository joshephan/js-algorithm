// 그래프 데이터를 생성하는 클래스
class SeoulGraph {
  constructor() {
    this.adjList = new Map(); // (1): 인접한 지역을 저장
  }

  // 각 지역(정점)을 추가하는 메서드
  addVertex(vertex) {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
    }
  }

  // 간선을 추가하는 메서드
  addEdge(vertex1, vertex2) {
    this.adjList.get(vertex1).push(vertex2);
    this.adjList.get(vertex2).push(vertex1);
  }

  // DFS 수행하는 메서드
  dfs(startVertex) {
    const visited = new Set(); // 방문한 지역이 저장되는 Set 타입 데이터

    // DFS 함수
    const dfsRecursive = (vertex) => {
      visited.add(vertex);
      console.log(vertex);

      const neighbors = this.adjList.get(vertex);

      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          dfsRecursive(neighbor);
        }
      }
    };

    dfsRecursive(startVertex);
  }
}

const graph = new SeoulGraph(); // (2) 클래스 생성
graph.addVertex("강남구");
graph.addVertex("강동구");
graph.addVertex("강북구");
/// 이하 생략 ...

graph.addEdge("강남구", "서초구");
graph.addEdge("강남구", "용산구");
graph.addEdge("강남구", "성동구");
graph.addEdge("강남구", "광진구");
graph.addEdge("강남구", "송파구");

graph.addEdge("강동구", "광진구");
graph.addEdge("강동구", "송파구");
/// 이하 생략 ...

graph.dfs("강남구"); // (3) DFS 실행
