/**
 * 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/131127
 */
function solution(want, number, discount) {
  var answer = 0;
  const count = number.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  const wantList = [];
  for (let i = 0; i < number.length; i++) {
    for (let j = 0; j < number[i]; j++) {
      wantList.push(want[i]);
    }
  }
  wantList.sort((a, b) => a.localeCompare(b));
  for (let i = count; i <= discount.length; i++) {
    const temp = discount.slice(i - count, i);
    temp.sort((a, b) => a.localeCompare(b));
    if (JSON.stringify(wantList) === JSON.stringify(temp)) {
      answer++;
    }
  }
  return answer;
}
