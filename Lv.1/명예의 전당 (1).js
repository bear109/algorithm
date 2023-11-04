/**
 * 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/138477
 */
function solution(k, score) {
  var answer = [];
  let arr = [];
  for (let i = 0; i < score.length; i++) {
    if (arr.length < k + 1) {
      arr.push(score[i]);
    }
    arr.sort((a, b) => b - a);
    if (arr.length >= k + 1) {
      arr.pop();
    }
    answer.push(arr[arr.length - 1]);
  }

  return answer;
}
