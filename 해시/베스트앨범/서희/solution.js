function solution(genres, plays) {
  let musicMap = new Map();
  let result = [];
  genres.forEach((genre, idx) => {
    if (musicMap.has(genre))
      musicMap.set(genre, [...musicMap.get(genre), plays[idx]]);
    else musicMap.set(genre, [plays[idx]]);
  });
  // 재생수 높은순서대로 정렬하여 array로 변환
  let musicMapToArray = [...musicMap].map(([genre, plays]) => [
    genre,
    plays.sort((a, b) => b - a),
  ]);

  // 고유번호 작은 순
  musicMapToArray = musicMapToArray.map(([genre, playList]) => [
    genre,
    playList.sort((a, b) => a === b && plays.indexOf(a) - plays.indexOf(b)),
  ]);
  // 재생수 높은 순으로 array 정렬
  musicMapToArray.sort(
    ([genreA, playsA], [genreB, playsB]) => playsB[0] - playsA[0]
  );

  // 최대 2개
  musicMapToArray.forEach(([_, playList]) => {
    playList.forEach((play, idx) => {
      if (idx <= 1) result.push(plays.indexOf(play));
    });
  });
  return result;
}
