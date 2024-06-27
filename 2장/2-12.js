function rankCountries(countries) {
  let len = countries.length;
  for (let i = 0; i < len; i++) {
    let max = i;
    for (let j = i + 1; j < len; j++) {
      if (countries[max].gold < countries[j].gold) {
        max = j;
      } else if (countries[max].gold == countries[j].gold) {
        if (countries[max].silver < countries[j].silver) {
          max = j;
        } else if (countries[max].silver == countries[j].silver) {
          if (countries[max].bronze < countries[j].bronze) {
            max = j;
          } else if (countries[max].bronze == countries[j].bronze) {
            if (countries[max].games > countries[j].games) {
              max = j;
            }
          }
        }
      }
    }
    if (max != i) {
      let tmp = countries[i];
      countries[i] = countries[max];
      countries[max] = tmp;
    }
  }
  return countries;
}

let countries = [
  { country: "Korea", gold: 5, silver: 4, bronze: 2, games: 10 },
  { country: "USA", gold: 5, silver: 3, bronze: 2, games: 9 },
  { country: "Japan", gold: 5, silver: 2, bronze: 4, games: 11 },
  { country: "China", gold: 5, silver: 2, bronze: 2, games: 12 },
  { country: "Germany", gold: 4, silver: 3, bronze: 3, games: 9 },
];

console.log(rankCountries(countries));
