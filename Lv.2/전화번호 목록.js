/**
 * 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42577
 */
function solution(phone_book) {
  let answer = phone_book
    .sort()
    .some((value, index, self) => self[index + 1]?.indexOf(value) === 0);

  return !answer;
}
