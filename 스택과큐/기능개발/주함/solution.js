function solution(progresses, speeds) {
  let deployCnt = 1;
  let currentMaxRestDay = 0;

  const restDays = progresses.map((progress, idx) =>
    Math.ceil((100 - progress) / speeds[idx])
  );

  const answer = restDays.reduce((acc, restDay, idx) => {
    if (idx === 0) {
      currentMaxRestDay = restDay;

      return acc;
    }
    if (restDay <= currentMaxRestDay) {
      deployCnt += 1;

      return acc;
    }

    acc.push(deployCnt);
    deployCnt = 1;
    currentMaxRestDay = restDay;

    return acc;
  }, []);
  answer.push(deployCnt);

  return answer;
}
