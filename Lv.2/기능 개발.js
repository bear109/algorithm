/**
 * 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42586
 */

//내가 작성한 풀이
function solution(progresses, speeds) {
  var answer = [];
  let arr = [];
  for (let i = 0; i < progresses.length; i++) {
    progresses[i] = 100 - progresses[i];
    progresses[i] = Math.ceil(progresses[i] / speeds[i]);
  }
  for (let i = 0; i < progresses.length; i++) {
    if (arr.length === 0) {
      arr.push(progresses[i]);
    } else {
      if (Math.max(...arr) >= progresses[i]) {
        arr.push(progresses[i]);
      } else {
        answer.push(arr.length);
        arr = [];
        arr.push(progresses[i]);
      }
    }
  }
  answer.push(arr.length);
  return answer;
}

//큐를 이용한 풀이
function solution(progresses, speeds) {
  var answer = [];

  while (speeds.length > 0) {
    for (let i in speeds) {
      if (progresses[i] < 100) {
        progresses[i] += speeds[i];
      }
    }

    let count = 0;
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count++;
    }
    if (count > 0) {
      answer.push(count);
    }
  }

  return answer;
}
