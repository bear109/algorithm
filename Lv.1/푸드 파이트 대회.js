/**
 * 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/134240
 */
function solution(food) {
  var answer = '';
  let arr = [1];
  for (let i = 1; i < food.length; i++) {
    arr.push(Math.floor(food[i] / 2));
  }
  for (let i = 1; i < arr.length; i++) {
    answer += String(i).repeat(arr[i]);
  }
  let reverse = answer.split('').reverse().join('');
  return answer + '0' + reverse;
}
