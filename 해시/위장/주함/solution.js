function solution(clothes) {
  let answer = 1;

  const clothMap = new Map();
  clothes.forEach((cloth) => {
    const TYPE = cloth[1];

    if (clothMap.get(TYPE)) {
      clothMap.set(TYPE, clothMap.get(TYPE) + 1);
    } else {
      clothMap.set(TYPE, 1);
    }
  });

  [...clothMap.values()].forEach((value) => {
    answer *= value + 1;
  });

  return answer - 1;
}

// CHECK :: *(옷의 개수 + 안입은 경우) - (모두 안 입은 경우)
