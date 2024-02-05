/**
 * 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/250137
 */
function solution(bandage, health, attacks) {
  let currentHealth = health;
  const endTime = attacks[attacks.length - 1][0];
  const attackTime = attacks.map((el) => el[0]);
  const attackDamage = attacks.map((el) => el[1]);
  let bandageCount = 1;
  for (let i = 0; i <= endTime; i++) {
    if (attackTime.indexOf(i) !== -1) {
      currentHealth -= attackDamage[attackTime.indexOf(i)];
      if (currentHealth <= 0) {
        currentHealth = -1;
        break;
      }
      bandageCount = 1;
    } else {
      if (bandageCount == bandage[0]) {
        currentHealth += bandage[1] + bandage[2];
        bandageCount = 1;
      } else {
        currentHealth += bandage[1];
        bandageCount++;
      }
      if (currentHealth + bandage[1] > health) {
        currentHealth = health;
      }
    }
  }
  return currentHealth;
}
