let answer = 0;

function solution(numbers, target) {
  dfs(numbers, 0, 0, target, numbers.length);

  return answer;
}

function dfs(arr, idx, sum, target) {
  if (idx === arr.length) {
    if (target === sum) answer++;

    return;
  }

  const _arr = [...arr];
  _arr[idx] = -1 * _arr[idx];

  dfs([...arr], idx + 1, sum + arr[idx], target);
  dfs(_arr, idx + 1, sum + _arr[idx], target);
}
