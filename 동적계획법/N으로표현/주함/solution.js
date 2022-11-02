// 괄호와 붙이는 숫자때문에 앞에서부터 계산할 수는 없음
// return 최솟값을 메모이제이션으로 해결해야겠다라고 생각

// CHECK :: N을 몇 번 사용한 계산값을 저장
// atomic 한 값으로 return 값을 늘려가며 8까지 탐색

function solution(N, number) {
  let answer = -1;
  const memoization = [];

  memoization[1] = new Set();
  memoization[1].add(N);
  if (N === number) return 1;

  for (let i = 2; i <= 8; i++) {
    memoization[i] = new Set();

    // i = 2
    // NN
    // memo[1] */+- memo[1]

    // i = 3
    // NNN
    // memo[1] */+- memo[2]
    // memo[2] */+- memo[1]

    memoization[i].add(getContinuousNumber(N, i));
    for (let iter = 1; iter < i; iter++) {
      for (const first of memoization[iter]) {
        for (const second of memoization[i - iter]) {
          memoization[i].add(first + second);
          memoization[i].add(first - second);
          memoization[i].add(first * second);
          memoization[i].add(Math.floor(first / second));
        }
      }
    }

    if (memoization[i].has(number)) return i;
  }

  return answer;
}

function getContinuousNumber(n, cnt) {
  const strNumber = "" + n;
  let returnNumber = "";

  while (cnt > 0) {
    returnNumber += strNumber;
    cnt--;
  }

  return +returnNumber;
}

console.log(solution(2, 11));
