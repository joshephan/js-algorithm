let restaurants = [
  {
    name: "음식점A",
    totalOrders: 300,
    avgRating: 4.5,
    likes: 200,
    distance: 5,
  },
  {
    name: "음식점B",
    totalOrders: 250,
    avgRating: 4.2,
    likes: 180,
    distance: 25,
  },
  {
    name: "음식점C",
    totalOrders: 400,
    avgRating: 4.7,
    likes: 250,
    distance: 15,
  },
  {
    name: "음식점D",
    totalOrders: 200,
    avgRating: 4.1,
    likes: 150,
    distance: 30,
  },
  {
    name: "음식점E",
    totalOrders: 350,
    avgRating: 4.4,
    likes: 220,
    distance: 10,
  },
];
const weights = { totalOrders: 0.2, avgRating: 0.3, likes: 0.2, distance: 0.3 };
function calculateScore(restaurant) {
  const maxDistance = 20;
  if (restaurant.distance > maxDistance) {
    return null;
  }
  let score =
    weights.totalOrders * restaurant.totalOrders +
    weights.avgRating * restaurant.avgRating +
    weights.likes * restaurant.likes +
    weights.distance * (maxDistance - restaurant.distance);
  return score;
}
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      let score1 = calculateScore(arr[j - 1]);
      let score2 = calculateScore(arr[j]);
      if (score1 < score2) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort(restaurants));
