/**
 * 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/132267
 */
function solution(a, b, n) {
  var answer = 0;
  while (a <= n) {
    answer += parseInt(n / a) * b;
    n = parseInt(n / a) * b + parseInt(n % a);
  }
  return answer;
}
