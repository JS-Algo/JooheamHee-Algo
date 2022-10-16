function solution(numbers, target) {
  let result = 0;
  const visitedNode = new Array(numbers.length).fill(0);

  function BFS(visitedNode, sum, currentIdx) {
    if (!visitedNode.includes(0)) {
      if (sum == target) result += 1;
      return;
    }
    visitedNode[currentIdx] = 1;
    BFS(visitedNode, sum + numbers[currentIdx], currentIdx + 1);
    BFS(visitedNode, sum - numbers[currentIdx], currentIdx + 1);
    visitedNode[currentIdx] = 0;
  }
  BFS(visitedNode, 0, 0);
  return result;
}
