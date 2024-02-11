/**
 * 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/176963
 */
function solution(name, yearning, photo) {
  var answer = [];
  for (let i = 0; i < photo.length; i++) {
    let sumYearning = 0;
    for (let j = 0; j < photo[i].length; j++) {
      const yearningCount = name.indexOf(photo[i][j]);
      if (yearningCount >= 0) {
        sumYearning += yearning[yearningCount];
      }
    }
    answer.push(sumYearning);
  }
  return answer;
}
