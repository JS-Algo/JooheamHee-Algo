function solution(maps) {
  const maxX = maps.length - 1;
  const maxY = maps[0].length - 1;
  const visitQ = [[0, 0]];
  const visitedMaps = Array.from(Array(maxX + 1), () =>
    Array(maxY + 1).fill(0)
  );
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  visitedMaps[0][0] = 1;

  while (visitQ.length > 0) {
    const [x, y] = visitQ.shift();

    if (x === maxX && y === maxY) break;

    for (let direction of directions) {
      const currentX = x + direction[0];
      const currentY = y + direction[1];

      if (currentX < 0 || currentX > maxX) continue;
      if (currentY < 0 || currentY > maxY) continue;

      if (maps[currentX][currentY] && !visitedMaps[currentX][currentY]) {
        visitQ.push([currentX, currentY]);
        visitedMaps[currentX][currentY] = visitedMaps[x][y] + 1;
      }
    }
  }

  return visitedMaps[maxX][maxY] ? visitedMaps[maxX][maxY] : -1;
}
