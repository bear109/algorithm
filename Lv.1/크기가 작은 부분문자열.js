/**
 * 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/147355
 */
function solution(t, p) {
  var answer = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    if (+p >= +t.substr(i, p.length)) answer++;
  }
  return answer;
}
