/**
 * 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/161990
 */
function solution(wallpaper) {
  const xArr = [],
    yArr = [];
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] == '#') {
        xArr.push(i);
        yArr.push(j);
      }
    }
  }
  return [Math.min(...xArr), Math.min(...yArr), Math.max(...xArr) + 1, Math.max(...yArr) + 1];
}
