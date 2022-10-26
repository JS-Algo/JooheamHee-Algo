function solution(number, k) {
  let answer = "";

  const MAX_CNT = number.length - k;

  dfs("", 0, 0);
  function dfs(currentNumber, idx, cnt) {
    if (cnt === MAX_CNT)
      return (answer = +currentNumber > +answer ? currentNumber : answer);
    if (idx >= number.length) {
      if (cnt === MAX_CNT)
        return (answer = +currentNumber > +answer ? currentNumber : answer);

      return;
    }

    dfs(currentNumber, idx + 1, cnt);
    currentNumber += number[idx];
    dfs(currentNumber, idx + 1, cnt + 1);
  }

  return answer;
}
