function solution(genres, plays) {
  let musicMap = new Map();
  let result = [];
  genres.forEach((genre, idx) => {
    if (musicMap.has(genre))
      musicMap.set(genre, [
        ...musicMap.get(genre),
        { play: plays[idx], idx: idx },
      ]);
    else musicMap.set(genre, [{ play: plays[idx], idx: idx }]);
  });
  // 재생수 높은순서대로 정렬하여 array로 변환
  let musicMapToArray = [...musicMap].map(([genre, data]) => [
    genre,
    data.sort((a, b) => b.play - a.play),
  ]);

  // 고유번호 작은 순
  musicMapToArray = musicMapToArray.map(([genre, data]) => {
    return [genre, data.sort((a, b) => a.play === b.play && a.idx - b.idx)];
  });
  // // 재생수 높은 순으로 array 정렬
  musicMapToArray.sort(
    ([genreA, dataA], [genreB, dataB]) => dataB[0].play - dataA[0].play
  );
  // // 최대 2개
  musicMapToArray.forEach(([genre, data]) => {
    data.forEach((info, idx) => {
      if (idx <= 1) result.push(info.idx);
    });
  });
  return result;
}
console.log(
  solution(
    ["c", "a", "b", "a", "a", "b", "b", "b", "b", "c", "c", "c", "d"],
    [1, 500, 9, 600, 501, 800, 500, 300, 2, 2, 1, 2, 100000]
  )
);
//12,5,6,3,4,9,11
