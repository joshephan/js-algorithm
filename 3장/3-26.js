let peaks = [
  {
    name: "A",
    connections: [
      { peak: "B", difficulty: 3 },
      { peak: "C", difficulty: 1 },
    ],
  },
  {
    name: "B",
    connections: [
      { peak: "A", difficulty: 3 },
      { peak: "C", difficulty: 2 },
      { peak: "D", difficulty: 5 },
    ],
  },
  {
    name: "C",
    connections: [
      { peak: "A", difficulty: 1 },
      { peak: "B", difficulty: 2 },
      { peak: "D", difficulty: 4 },
    ],
  },
  {
    name: "D",
    connections: [
      { peak: "B", difficulty: 6 },
      { peak: "C", difficulty: 4 },
    ],
  },
];

function getPaths(graph, start, end, visited = [], paths = []) {
  visited.push(start);
  if (start === end) {
    paths.push([...visited]);
  } else {
    for (let node in graph[start]) {
      if (!visited.includes(node)) {
        getPaths(graph, node, end, visited, paths);
      }
    }
  }
  visited.pop();
  return paths;
}

function getDifficulty(graph, path) {
  let difficulty = 0;
  for (let i = 0; i < path.length - 1; i++) {
    difficulty += graph[path[i]][path[i + 1]];
  }
  return difficulty;
}

function getPermutations(array) {
  let results = [];

  if (array.length === 1) {
    results.push(array);
    return results;
  }

  for (let i = 0; i < array.length; i++) {
    let firstChar = array[i];
    let charsLeft = array.slice(0, i).concat(array.slice(i + 1));
    let innerPermutations = getPermutations(charsLeft);
    for (let j = 0; j < innerPermutations.length; j++) {
      results.push([firstChar].concat(innerPermutations[j]));
    }
  }
  return results;
}

function createGraph(peaks) {
  const graph = {};

  peaks.forEach((peak) => {
    graph[peak.name] = {};

    peak.connections.forEach((connection) => {
      graph[peak.name][connection.peak] = connection.difficulty;
    });
  });

  return graph;
}

function findPath(peaks, start) {
  const graph = createGraph(peaks);
  let minDifficulty = Infinity;
  let minPath;
  const nodes = Object.keys(graph);
  nodes.splice(nodes.indexOf(start), 1);

  const permutations = getPermutations(nodes);
  permutations.forEach((permutation) => {
    const path = [start, ...permutation, start];
    const difficulty = getDifficulty(graph, path);
    if (difficulty < minDifficulty) {
      minDifficulty = difficulty;
      minPath = path;
    }
  });

  return { path: minPath, difficulty: minDifficulty };
}

console.log(findPath(peaks, "A"));
