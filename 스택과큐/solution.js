function solution(progresses, speeds) {
  let answer = [];
  const days = progresses.map((progress, idx) =>
    Math.ceil((100 - progress) / speeds[isx])
  );
  let ahead = days[0];

  for (let top = 0, index = 0; top !== progresses.length; ) {
    if (days[top] <= ahead) {
      top++;
      answer[index] = answer[index] + 1 || 1;
    } else {
      ahead = days[top];
      index++;
    }
  }
  return answer;
}
