/**
 * 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/178871
 */
function solution(players, callings) {
  const list = players.reduce((acc, cur, index) => {
    acc[cur] = index;
    return acc;
  }, {});

  callings.forEach((player) => {
    const curPlayerIndex = list[player];

    const nextPlayer = players[curPlayerIndex - 1];

    players[curPlayerIndex - 1] = player;
    players[curPlayerIndex] = nextPlayer;

    list[player] -= 1;
    list[nextPlayer] += 1;
  });
  return players;
}
