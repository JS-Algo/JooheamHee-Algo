function solution(nums) {
  let answer = 0;
  const MAX_CNT = nums.length / 2;

  const numSet = new Set(nums);

  answer = numSet.size < MAX_CNT ? numSet.size : MAX_CNT;
  return answer;
}

// CHECK :: array like set
// CHECK :: set.size()
