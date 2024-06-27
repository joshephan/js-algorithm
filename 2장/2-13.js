function rankCountries(countries) {
  let len = countries.length;
  for (let i = 0; i < len; i++) {
    let max = i;
    for (let j = i + 1; j < len; j++) {
      if (countries[max].gold < countries[j].gold) {
        max = j;
        continue;
      }
      if (
        countries[max].gold == countries[j].gold &&
        countries[max].silver < countries[j].silver
      ) {
        max = j;
        continue;
      }
      if (
        countries[max].silver == countries[j].silver &&
        countries[max].bronze < countries[j].bronze
      ) {
        max = j;
        continue;
      }
      if (
        countries[max].bronze == countries[j].bronze &&
        countries[max].games > countries[j].games
      ) {
        max = j;
      }
    }
  }
  if (max != i) {
    let tmp = countries[i];
    countries[i] = countries[max];
    countries[max] = tmp;
  }
  return countries;
}
