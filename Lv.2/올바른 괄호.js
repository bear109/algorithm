/**
 * 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/131127
 */
function solution(s) {
  var answer = true;
  let stack = 0;
  for (let i = 0; i < s.length; i++) {
    stack += s[i] === '(' ? 1 : -1;
    if (stack < 0) return false;
  }
  answer = stack ? false : true;
  return answer;
}
