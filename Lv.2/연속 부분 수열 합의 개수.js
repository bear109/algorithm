/**
 * 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/131701
 */
function solution(elements) {
  let arr = [];
  let fullArr = [...elements, ...elements];
  let len = 1;
  while (len <= elements.length) {
    for (let i = 0; i < elements.length + len - 1; i++) {
      const temp = fullArr.slice(i, i + len).reduce((acc, cur) => {
        return acc + cur;
      }, 0);
      arr.push(temp);
    }
    len++;
  }
  arr = [...new Set(arr)];
  return arr.length;
}
