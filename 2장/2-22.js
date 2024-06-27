function damageCalculator(unit, target) {
  const damageTypes = {
    일반형: { 대형: 1, 중형: 1, 소형: 1 },
    진동형: { 대형: 0.25, 중형: 0.5, 소형: 1 },
    폭발형: { 대형: 1, 중형: 0.75, 소형: 0.5 },
  };
  return unit.damage * damageTypes[unit.type][target.SIZE];
}
