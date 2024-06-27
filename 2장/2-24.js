// 배틀크루저의 체력
const BATTLE_CRUISER = {
  MAX_HP: 500,
  SIZE: "대형",
};
// 가지고 있는 미네랄 자원
const MY_MINERAL = 500;
// 가지고 있는 가스 자원
const MY_GAS = 500;
const units = [
  {
    name: "드라군",
    mineral: 125,
    gas: 50,
    attackSpeed: 1.25,
    damage: 20,
    type: "폭발형",
  },
  {
    name: "마린",
    mineral: 50,
    gas: 0,
    attackSpeed: 0.625,
    damage: 6,
    type: "일반형",
  },
  {
    name: "골리앗",
    mineral: 100,
    gas: 50,
    attackSpeed: 0.916,
    damage: 20,
    type: "폭발형",
  },
  {
    name: "스카웃",
    mineral: 275,
    gas: 125,
    attackSpeed: 0.916,
    damage: 28,
    type: "폭발형",
  },
  {
    name: "뮤탈리스크",
    mineral: 100,
    gas: 100,
    attackSpeed: 1.25,
    damage: 9,
    type: "일반형",
  },
  {
    name: "히드라리스크",
    mineral: 75,
    gas: 25,
    attackSpeed: 0.625,
    damage: 10,
    type: "폭발형",
  },
];
function unitsCanBeProduced(unit) {
  const mineralBased = Math.floor(MY_MINERAL / unit.mineral);
  const gasBased = Math.floor(MY_GAS / unit.gas);
  return Math.min(mineralBased, gasBased);
}
function damageCalculator(unit, target) {
  const damageTypes = {
    일반형: { 대형: 1, 중형: 1, 소형: 1 },
    진동형: { 대형: 0.25, 중형: 0.5, 소형: 1 },
    폭발형: { 대형: 1, 중형: 0.75, 소형: 0.5 },
  };
  return unit.damage * damageTypes[unit.type][target.SIZE];
}
function timeToKill(unit, target) {
  const unitsProduced = unitsCanBeProduced(unit);
  const damagePerAttack = unitsProduced * damageCalculator(unit, target);
  return (target.MAX_HP / damagePerAttack) * unit.attackSpeed;
}
// 삽입 정렬
for (let i = 1; i < units.length; i++) {
  let key = units[i];
  let j = i - 1;
  while (
    j >= 0 &&
    timeToKill(units[j], BATTLE_CRUISER) > timeToKill(key, BATTLE_CRUISER)
  ) {
    units[j + 1] = units[j];
    j = j - 1;
  }
  units[j + 1] = key;
}
console.log(units);
