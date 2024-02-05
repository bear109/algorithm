/**
 * 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/161989
 */
function solution(n, m, section) {
  var answer = 0;
  let part = 0;
  section.forEach((empty) => {
    if (empty > part) {
      part = empty + m - 1;
      answer++;
    }
  });
  return answer;
}
