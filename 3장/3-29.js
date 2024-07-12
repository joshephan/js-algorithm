function KruskalMST(graph) {
  const parent = [];
  const rank = [];
  let result = [];
  let edges = [];
  for (let u = 0; u < graph.length; u++) {
    for (let v = 0; v < graph.length; v++) {
      if (graph[u][v] !== 0) {
        edges.push([u, v, graph[u][v]]);
      }
    }
  }
  edges.sort((a, b) => a[2] - b[2]);
  for (let node = 0; node < graph.length; node++) {
    parent[node] = node;
    rank[node] = 0;
  }
  let i = 0;
  while (result.length < graph.length - 1) {
    let [u, v, w] = edges[i++];
    let x = find(parent, u);
    let y = find(parent, v);
    if (x !== y) {
      union(parent, rank, x, y);
      result.push([u, v, w]);
    }
  }
  return result;
}

function find(parent, node) {
  if (parent[node] !== node) {
    parent[node] = find(parent, parent[node]);
  }
  return parent[node];
}

function union(parent, rank, x, y) {
  if (rank[x] > rank[y]) {
    parent[y] = x;
  } else if (rank[x] < rank[y]) {
    parent[x] = y;
  } else {
    parent[y] = x;
    rank[x]++;
  }
}

const graph = [
  [0, 2, 0, 6, 0],
  [2, 0, 3, 8, 5],
  [0, 3, 0, 0, 7],
  [6, 8, 0, 0, 9],
  [0, 5, 7, 9, 0],
];

console.log(logruskalMST(graph));

// [ [ 0, 1, 2 ], [ 1, 2, 3 ], [ 1, 4, 5 ], [ 0, 3, 6 ] ]
