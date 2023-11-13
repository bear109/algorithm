/**
 * 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/155652
 */
function solution(s, skip, index) {
  let answer = '';
  for (let apt of s) {
    let aptCode = apt.charCodeAt(); // 현재 알파벳의 코드 번호
    let i = index;

    while (i > 0) {
      aptCode = aptCode === 122 ? 97 : aptCode + 1; // z인 경우만 a로 변경
      if (!skip.includes(String.fromCharCode(aptCode))) {
        i -= 1;
      }
    }
    answer += String.fromCharCode(aptCode); // 코드 -> 알파벳
  }
  return answer;
}
