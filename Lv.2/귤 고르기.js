/**
 * 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/138476
 */
function solution(k, tangerine) {
  var answer = 0;
  let obj = tangerine.reduce((a, i) => {
    return (a[i] = (a[i] || 0) + 1), a;
  }, {});
  const countList = Object.entries(obj)
    .map(([_, value]) => value)
    .sort((a, b) => b - a);
  for (let i = 0; i < countList.length; i++) {
    k -= countList[i];
    answer++;
    if (k <= 0) break;
  }
  return answer;
}
