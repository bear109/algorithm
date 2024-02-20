/**
 * 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12945
 */
function solution(n) {
  var answer = 0;
  let arr = [];
  for (let i = 0; i <= n; i++) {
    if (i === 0) arr.push(0);
    else if (i === 1) arr.push(1);
    else {
      arr.push((arr[i - 2] % 1234567) + (arr[i - 1] % 1234567));
    }
  }
  answer = arr[arr.length - 1] % 1234567;
  return answer;
}
