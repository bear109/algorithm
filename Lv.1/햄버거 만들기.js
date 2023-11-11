/**
 * 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/133502
 */
function solution(ingredient) {
  var answer = 0;
  for (let i = 0; i < ingredient.length; i++) {
    if (JSON.stringify(ingredient.slice(i, i + 4)) == JSON.stringify([1, 2, 3, 1])) {
      answer++;
      ingredient.splice(i, 4);
      i -= 3;
    }
  }
  return answer;
}
