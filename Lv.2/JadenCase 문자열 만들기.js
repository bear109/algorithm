/**
 * 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12951
 */
function solution(s) {
  return s
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
    .join(' ');
}
