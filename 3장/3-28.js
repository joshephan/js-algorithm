function primMST(graph) {
  const parent = [];
  const key = [];
  const visited = [];
  const { length } = graph;
  for (let i = 0; i < length; i++) {
    // (1)
    key[i] = Infinity;
    visited[i] = false;
  }
  key[0] = 0;
  parent[0] = -1;

  for (let count = 0; count < length - 1; count++) {
    let u = minKey(key, visited); // (2)
    visited[u] = true;
    for (let v = 0; v < length; v++) {
      if (graph[u][v] && visited[v] === false && graph[u][v] < key[v]) {
        // (5)
        parent[v] = u;
        key[v] = graph[u][v];
      }
    }
  }
  return parent;
}

function minKey(key, visited) {
  let min = Infinity;
  let minIndex;
  for (let v = 0; v < key.length; v++) {
    if (visited[v] === false && key[v] < min) {
      // (3)
      min = key[v];
      minIndex = v; // (4)
    }
  }
  return minIndex;
}

const graph = [
  [0, 2, 0, 6, 0],
  [2, 0, 3, 8, 5],
  [0, 3, 0, 0, 7],
  [6, 8, 0, 0, 9],
  [0, 5, 7, 9, 0],
];

console.log(primMST(graph)); // [ -1, 0, 1, 0, 1 ]
