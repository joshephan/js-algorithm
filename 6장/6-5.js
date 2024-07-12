function permute(arr) {
  if (arr.length === 1) {
    return [arr];
  }

  let permutations = [];
  for (let i = 0; i < arr.length; i++) {
    let rest = arr.slice(0, i).concat(arr.slice(i + 1));
    for (let subPermutation of permute(rest)) {
      permutations.push([arr[i]].concat(subPermutation));
    }
  }

  return permutations;
}

function tsp(distances) {
  let cities = Object.keys(distances);
  let shortestDistance = Infinity;
  let shortestPath;

  for (let permutation of permute(cities)) {
    let distance = 0;
    for (let i = 0; i < permutation.length - 1; i++) {
      distance += distances[permutation[i]][permutation[i + 1]];
    }
    distance += distances[permutation[permutation.length - 1]][permutation[0]];

    if (distance < shortestDistance) {
      shortestDistance = distance;
      shortestPath = permutation;
    }
  }

  return { shortestDistance, shortestPath };
}

let distances = {
  A: { A: 0, B: 1, C: 3, D: 4 },
  B: { A: 1, B: 0, C: 2, D: 5 },
  C: { A: 3, B: 2, C: 0, D: 6 },
  D: { A: 4, B: 5, C: 6, D: 0 },
};

console.log(tsp(distances));
