function giveChange(itemPrice, amountPaid) {
  let change = amountPaid - itemPrice;

  if (change < 0) {
    console.log("지불 금액이 부족합니다.");
    return;
  }

  const denominations = [10000, 5000, 1000, 500, 100, 50, 10];
  const changeResult = {};

  for (const denomination of denominations.reverse()) {
    const count = Math.min(Math.floor(change / denomination), 100); // 최대 100개씩 사용 가능

    if (count > 0) {
      changeResult[denomination] = count;
      change -= denomination * count;
    }
  }

  if (change === 0) {
    console.log("손님에게 최대한 많은 잔돈을 주는 방법:");
    console.log(changeResult);
  } else {
    console.log("거스름돈을 줄 수 없습니다. (동전/지폐가 부족합니다.)");
  }
}

giveChange(5000, 10000);
