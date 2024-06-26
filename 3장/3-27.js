class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(node, cost) {
    this.queue.push({ node, cost });
    this.queue.sort((a, b) => a.cost - b.cost);
  }

  dequeue() {
    return this.queue.shift();
  }
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

function dijkstra(peaks, start) {
  const graph = createGraph(peaks);
  const costs = {};
  const parents = {};
  const processed = [];
  const queue = new PriorityQueue();

  costs[start] = 0;
  queue.enqueue(start, 0);

  while (queue.queue.length > 0) {
    const { node: lowestNode } = queue.dequeue();

    if (!processed.includes(lowestNode)) {
      processed.push(lowestNode);

      Object.keys(graph[lowestNode]).forEach((neighbor) => {
        const newCost = costs[lowestNode] + graph[lowestNode][neighbor];

        if (!costs[neighbor] || costs[neighbor] > newCost) {
          costs[neighbor] = newCost;
          parents[neighbor] = lowestNode;
          queue.enqueue(neighbor, newCost);
        }
      });
    }
  }

  return { costs, parents };
}

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

console.log(dijkstra(peaks, "A"));
