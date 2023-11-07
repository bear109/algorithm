/**
 * 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/140108
 */
function solution(s) {
  let answer = 0;
  let firstString = '';
  let count1 = 0,
    count2 = 0;
  for (let i = 0; i < s.length; i++) {
    if (!firstString) firstString = s[i];
    if (s[i] === firstString) count1++;
    else count2++;
    if (count1 === count2) {
      answer++;
      count1 = 0;
      count2 = 0;
      firstString = '';
    }
  }
  if (firstString) answer++;

  return answer;
}
