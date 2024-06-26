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
