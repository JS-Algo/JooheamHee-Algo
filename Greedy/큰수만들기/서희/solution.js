function solution(number, k) {
  let result = [];
  for (let idx = 0; idx < number.length; idx++) {
    while (k > 0 && result[result.length - 1] < number[idx]) {
      result.pop();
      k--;
    }
    result.push(number[idx]);
  }

  if (result.length > number.length - k)
    result.splice(number.length - k, number.length);

  return result.join("");
}
