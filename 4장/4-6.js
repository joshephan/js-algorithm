const N = 7;
const gold = [6, 7, 4, 8, 2, 9, 5];
const tree = [
  [1, 2], // 집 0과 연결된 집들
  [0, 3, 4], // 집 1과 연결된 집들
  [0, 5, 6], // 집 2와 연결된 집들
  [1], // 집 3과 연결된 집들
  [1], // 집 4와 연결된 집들
  [2], // 집 5와 연결된 집들
  [2], // 집 6과 연결된 집들
];
const dp = Array.from(Array(N), () => Array(2).fill(0));

function dfs(node, parent, tree, gold, dp) {
  dp[node][0] = 0; // Node를 포함하지 않는 경우
  dp[node][1] = gold[node]; // Node를 포함하는 경우

  for (let neighbor of tree[node]) {
    if (neighbor === parent) continue; // 부모 노드는 건너뛰기
    dfs(neighbor, node, tree, gold, dp);
    dp[node][0] += Math.max(dp[neighbor][0], dp[neighbor][1]);
    dp[node][1] += dp[neighbor][0];
  }
}

function getMaxGold(N, gold, tree) {
  const dp = Array.from(Array(N), () => Array(2).fill(0));
  dfs(0, -1, tree, gold, dp);
  return Math.max(dp[0][0], dp[0][1]);
}

console.log(getMaxGold(N, gold, tree)); // 최대 골드 출력
