function timeToKill(unit, target) {
  const unitsProduced = unitsCanBeProduced(unit);
  const damagePerAttack = unitsProduced * damageCalculator(unit, target);
  return (target.MAX_HP / damagePerAttack) * unit.attackSpeed;
}
