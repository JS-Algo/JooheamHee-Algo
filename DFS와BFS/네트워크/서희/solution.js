function solution(n, computers) {
  const visitedNode = new Array(n).fill(false);
  let answer = 0;

  function DFS(idx) {
    visitedNode[idx] = true;
    for (let j = 0; j < n; j++) {
      if (computers[idx][j] && !visitedNode[j]) DFS(j);
    }
  }
  computers.forEach((_, idx) => {
    if (!visitedNode[idx]) {
      DFS(idx);
      answer += 1;
    }
  });
  return answer;
}
