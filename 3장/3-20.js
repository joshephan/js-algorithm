let connections = [
  [1, 2],
  [1, 3],
  [2, 3],
  [3, 4],
  [5, 6],
];

function dfs(node, graph, visited) {
  visited[node] = true;

  for (let nextNode of graph[node]) {
    if (!visited[nextNode]) {
      dfs(nextNode, graph, visited);
    }
  }
}

function countNetworks(connections) {
  let graph = {};
  let visited = {};
  let count = 0;

  for (let [node1, node2] of connections) {
    if (!graph[node1]) graph[node1] = [];
    if (!graph[node2]) graph[node2] = [];
    graph[node1].push(node2);
    graph[node2].push(node1);
    visited[node1] = false;
    visited[node2] = false;
  }

  for (let node in graph) {
    if (!visited[node]) {
      dfs(node, graph, visited);
      count++;
    }
  }

  return count;
}

console.log(countNetworks(connections)); // 출력 결과: 2
