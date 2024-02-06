/**
 * 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/172928
 */
function solution(park, routes) {
  const maxRow = park.length - 1;
  const maxCol = park[0].length - 1;

  let row = park.findIndex((s) => s.includes('S'));
  let col = park[row].indexOf('S');

  routes.forEach((position) => {
    const [d, n] = position.split(' ');

    let tempRow = row;
    let tempCol = col;
    let flag = true;

    for (let i = 0; i < Number(n); i++) {
      if (d === 'E') tempCol++;
      else if (d === 'W') tempCol--;
      else if (d === 'S') tempRow++;
      else if (d === 'N') tempRow--;

      if (
        tempRow > maxRow ||
        tempRow < 0 ||
        tempCol > maxCol ||
        tempCol < 0 ||
        park[tempRow][tempCol] === 'X'
      ) {
        flag = false;
        break;
      }
    }

    if (flag) {
      col = tempCol;
      row = tempRow;
    }
  });

  return [row, col];
}
