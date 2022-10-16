let answer = 0;

function solution(numbers, target) {
  dfs(numbers, 0, 0, target);
  return answer;
}

function dfs(numbers, idx, sum, target) {
  if (idx === numbers.length) {
    if (sum === target) answer++;

    return;
  }

  const copyNumbers = [...numbers];

  dfs(copyNumbers, idx + 1, sum + copyNumbers[idx], target);
  copyNumbers[idx] *= -1;
  dfs(copyNumbers, idx + 1, sum + copyNumbers[idx], target);
}
