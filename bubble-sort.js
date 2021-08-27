function bubbleSort(arr) {
  // keep track of how many iterations there are
  let iterations = 0;
  // Go through all array elements
  for (let i = 0; i < arr.length - 1; i++) {
    // Go through elements, minus already sorted
    for (let j = 0; j < arr.length - i - 1; j++) {
      // swap if the number is greater than the next
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    iterations++;
  }
  console.log(`iterations: ${iterations}`);
  return arr;
}

const array = [8, 2, 1, 4, 9, 3, 5, 7];

console.log(bubbleSort(array));
