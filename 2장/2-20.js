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
    type: " 폭발형 ",
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
