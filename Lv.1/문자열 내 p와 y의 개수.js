/**
 * 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12916
 */
function solution(s) {
  let pNum = 0;
  let yNum = 0;
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'p') pNum++;
    else if (s[i] === 'y') yNum++;
  }
  return pNum === yNum ? true : false;
}
