/**
 * 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/159994
 */
function solution(cards1, cards2, goal) {
  let idx1 = 0;
  let idx2 = 0;
  for (let i = 0; i < goal.length; i++) {
    if (cards1[idx1] === goal[i]) idx1++;
    else if (cards2[idx2] === goal[i]) idx2++;
    else return 'No';
  }
  return 'Yes';
}
