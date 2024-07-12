function isMatch(pattern, text) {
  const m = pattern.length;
  const n = text.length;

  // dp[i][j]는 pattern의 처음 i 글자와 text의 처음 j 글자가 일치하는지를 저장하는 배열
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));

  // 빈 패턴과 빈 텍스트는 항상 일치
  dp[0][0] = true;

  // 패턴이 *로 시작하는 경우에는 빈 텍스트와도 일치하므로 dp[i][0]을 갱신
  for (let i = 1; i <= m; i++) {
    // (1): m만큼 순회하는 반복문
    if (pattern[i - 1] === "*") {
      dp[i][0] = dp[i - 1][0];
    }
  }

  // 동적 프로그래밍을 통해 dp 배열 갱신
  for (let i = 1; i <= m; i++) {
    // (2): m과 n만큼 순회하는 중첩 반복문
    for (let j = 1; j <= n; j++) {
      if (pattern[i - 1] === "*") {
        // *인 경우, 이전에도 *이거나 
        // 현재 문자와 이전 패턴 문자가 일치하는 경우 
        // 또는 이전 문자열과 일치하는 경우
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1] || dp[i - 1][j - 1];
      } else if (pattern[i - 1] === "?" || pattern[i - 1] === text[j - 1]) {
        // ?이거나 현재 패턴 문자와 텍스트 문자가 일치하는 경우
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }

  // 최종 결과 반환 (pattern의 전체 길이와 text의 전체 길이가 일치하는지 확인)
  return dp[m][n];
}

// 결과 반환
console.log(isMatch("g*ks", "geeks")); // true
console.log(isMatch("ge?ks*", "geeksforgeeks")); // true
console.log(isMatch("g*k", "gee")); // false
