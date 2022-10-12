function solution(maps) {
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const [n, m] = [maps.length, maps[0].length];
  const visitMaps = Array.from(Array(n), (e) => Array(m).fill(0));
  visitMaps[0][0] = 1;

  const queue = [[0, 0]];

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < directions.length; i++) {
      const [newX, newY] = [x + directions[i][0], y + directions[i][1]];

      if (newX < 0 || newY < 0 || newX >= n || newY >= m) continue;

      if (!visitMaps[newX][newY] && maps[newX][newY]) {
        visitMaps[newX][newY] = visitMaps[x][y] + 1;
        queue.push([newX, newY]);
      }
    }
  }

  return visitMaps[n - 1][m - 1] ? visitMaps[n - 1][m - 1] : -1;
}
