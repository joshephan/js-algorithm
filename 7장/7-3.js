let btn = document.getElementById("myButton");
btn.addEventListener("click", function () {
  // do something
});

// 후에 필요 없어진 경우
btn.removeEventListener("click", function () {
  // do something
});
