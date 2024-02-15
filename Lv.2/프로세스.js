/**
 * 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42587
 */
function solution(priorities, location) {
  var answer = 0;
  let temp = [],
    arr = [];
  for (let i = 0; i < priorities.length; i++) {
    temp.push([i, priorities[i]]);
  }
  while (temp.length > 0) {
    if (temp[0][1] < Math.max(...priorities)) {
      temp.push(temp[0]);
      temp.shift();
    } else {
      arr.push(temp[0]);
      temp.shift();
      priorities.splice(priorities.indexOf(Math.max(...priorities)), 1);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === location) answer = i + 1;
  }
  return answer;
}
