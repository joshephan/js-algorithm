function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) { 
    for (let j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) { 
        const temp = array[j]; 
        array[j] = array[j - 1]; 
        array[j - 1] = temp; 
      }
    }
  }
}