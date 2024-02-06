/**
 * 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12939
 */
function solution(s) {
  s = s.split(' ');
  return `${Math.min(...s)} ${Math.max(...s)}`;
}
