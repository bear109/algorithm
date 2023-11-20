/**
 * 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/131128
 */
function solution(X, Y) {
  let answer = '';
  X = X.split('');
  Y = Y.split('');
  for (let i = 0; i < 10; i++) {
    const x = X.filter((a) => Number(a) === i).length;
    const y = Y.filter((a) => Number(a) === i).length;
    answer += String(i).repeat(Math.min(x, y));
  }
  if (answer === '') return '-1';
  if (Number(answer) === 0) return '0';
  return answer
    .split('')
    .sort((a, b) => Number(b) - Number(a))
    .join('');
}
