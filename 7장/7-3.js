let btn = document.getElementById("myButton");
btn.addEventListener("click", function () {
  // 클릭 발생 때 실행할 코드
});

// 후에 필요 없어진 경우
btn.removeEventListener("click", function () {
  // 이벤트 제거 후 실행될 코드
});
