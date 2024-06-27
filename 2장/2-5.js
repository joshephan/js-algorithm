function bubbleSort(array) {
  array.map((e1) =>
    array.map((e2, i) => {
      if (array[i] > array[i + 1]) {
        // 두 값을 비교하고, 스왑합니다
        array[i] = array[i + 1];
        array[i + 1] = e2;
      }
    })
  );
  return array;
}
