let friends = ["민준", "서윤", "지우", "지호", "준우"];

function addFamilyName(array) {
  let newFriends = [];
  for (let i = 0; i < array.length; i++) {
    newFriends.push("김" + array[i]);
  }
  return newFriends;
}
friends = addFamilyName(friends);
