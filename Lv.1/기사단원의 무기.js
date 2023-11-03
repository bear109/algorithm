/**
 * 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/136798
 */
function solution(number, limit, power) {
  var answer = 0;
  let arr = [];
  for (let i = 1; i <= number; i++) {
    let temp = [];
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        temp.push(j);
        if (i / j != j) temp.push(i / j);
      }
    }
    arr.push(temp.length);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= limit) answer += arr[i];
    else answer += power;
  }
  return answer;
}
