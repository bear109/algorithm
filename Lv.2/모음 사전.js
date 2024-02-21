/**
 * 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/84512
 */
function solution(word) {
  const result = [];
  const str = '';
  for (let i = 1; i <= 5; i++) dfs(str, i, result);
  return result.sort().indexOf(word) + 1;
}

const dfs = (word, length, result) => {
  const vowels = [...'AEIOU'];
  if (length === word.length) {
    result.push(word);
    return;
  }
  vowels.forEach((vowel) => {
    dfs(word + vowel, length, result);
  });
};
