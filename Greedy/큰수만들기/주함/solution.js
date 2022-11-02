function solution(number, k) {
  let answer = "";

  const ANSWER_LENGTH = number.length - k;
  const numberStack = [];
  let removeCnt = 0;

  for (let i = 0; i < number.length; i++) {
    while (
      numberStack.length > 0 &&
      +numberStack[numberStack.length - 1] < +number[i] &&
      removeCnt < k
    ) {
      numberStack.pop();
      removeCnt++;
    }
    numberStack.push(number[i]);
  }

  answer = numberStack.join("").slice(0, ANSWER_LENGTH);

  return answer;
}

// CHECK :: 전체 경우를 탐색(DFS)하지 않고, 그리디

// function solution(number, k) {
//   let answer = "";

//   const MAX_CNT = number.length - k;

//   dfs("", 0, 0);
//   function dfs(currentNumber, idx, cnt) {
//     if (cnt === MAX_CNT)
//       return (answer = +currentNumber > +answer ? currentNumber : answer);
//     if (idx >= number.length) {
//       if (cnt === MAX_CNT)
//         return (answer = +currentNumber > +answer ? currentNumber : answer);

//       return;
//     }

//     dfs(currentNumber, idx + 1, cnt);
//     currentNumber += number[idx];
//     dfs(currentNumber, idx + 1, cnt + 1);
//   }

//   return answer;
// }
