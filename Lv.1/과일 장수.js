/**
 * 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/135808
 */
function solution(k, m, score) {
  var answer = 0;
  let arr = [];
  score.sort((a, b) => b - a);
  for (let i = 0; i < score.length; i += m) {
    arr.push(score.slice(i, i + m));
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === m) {
      answer += Math.min(...arr[i]) * m;
    }
  }
  return answer;
}
