function solution(clothes) {
  let clotheMap = new Map();
  let result = 1;
  clothes.forEach(([name, type]) => {
    if (clotheMap.has(type)) {
      clotheMap.set(type, [...clotheMap.get(type), name]);
    } else clotheMap.set(type, [name]);
  });
  for (const [, clothes] of clotheMap) {
    result *= clothes.length + 1;
  }
  return result - 1;
}
