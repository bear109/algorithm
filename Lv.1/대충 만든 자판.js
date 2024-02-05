/**
 * 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/160586
 */
function solution(keymap, targets) {
  var answer = [];
  targets.forEach((target) => {
    const characters = target.split('');
    let count = 0;
    characters.forEach((str) => {
      const arr = [];
      keymap.forEach((key) => {
        if (key.indexOf(str) > -1) {
          arr.push(key.indexOf(str) + 1);
        }
      });
      count += Math.min(...arr);
    });
    isFinite(count) ? answer.push(count) : answer.push(-1);
  });
  return answer;
}
