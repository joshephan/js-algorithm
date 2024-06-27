const MY_MINERAL = 500;
const MY_GAS = 500;
function unitsCanBeProduced(unit) {
  const mineralBased = Math.floor(MY_MINERAL / unit.mineral);
  const gasBased = Math.floor(MY_GAS / unit.gas);
  return Math.min(mineralBased, gasBased);
}
