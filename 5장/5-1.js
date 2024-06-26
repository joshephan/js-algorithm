function calculateChange(itemPrice, amountPaid) {
  let change = amountPaid - itemPrice;

  if (change < 0) {
    console.log("지불 금액이 부족합니다.");
    return;
  }

  const denominations = [50000, 10000, 5000, 1000, 500, 100, 50, 10];
  const changeResult = {};

  for (const denomination of denominations) {
    const count = Math.floor(change / denomination);

    if (count > 0) {
      changeResult[denomination] = count;
      change -= denomination * count;
    }
  }

  console.log("잔돈:", changeResult);
}

// 예시: 35,000원짜리 물건을 50,000원으로 지불했을 때의 잔돈 계산
calculateChange(35000, 50000);
