function solution(name) {
  let answer = 0;

  [...name].forEach((al) => {
    answer += getCntForOneAlpahbet(al);
  });

  answer += getCntForMoving(name);

  return answer;
}

function getCntForOneAlpahbet(al) {
  const 전체 = "Z".charCodeAt(0) - "A".charCodeAt(0) + 1;
  const 기준 = ("Z".charCodeAt(0) - "A".charCodeAt(0)) / 2;
  const 차이 = al.charCodeAt(0) - "A".charCodeAt(0);

  if (차이 < 기준) {
    return 차이;
  } else {
    return 전체 - 차이;
  }
}

// function getCntForMoving(str) {
//   const alArr = [...str];
//   let cntFromStart = 0;
//   let cntFromEnd = 0;

//   for (let i = 1; i <= alArr.length; i++) {
//     if (!cntFromEnd && alArr[i] !== "A") cntFromEnd = alArr.length - i;
//     if (!cntFromStart && alArr[alArr.length - i] !== "A")
//       cntFromStart = alArr.length - i;
//   }

//   return Math.min(cntFromStart, cntFromEnd);
// }

// CHECK :: BBBAAAAAABA 인 경우 오른쪽 -> 왼쪽 방향을 틀어주어야 빠름
// CHECK :: 왼쪽/오른쪽에 관계 없이 최솟값을 고려하는 답안

function getCntForMoving(str) {
  let cnt = str.length - 1;
  let i, j;

  for (i = 1; i < str.length; i++) {
    if (str[i] === "A") {
      j = i + 1;
      while (j < str.length) {
        if (str[j] !== "A") break;
        j++;
      }

      const left = i - 1;
      const right = str.length - j;
      cnt = Math.min(cnt, left > right ? left + right * 2 : left * 2 + right);
    }
  }

  return cnt;
}
