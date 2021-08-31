function selectionSort(arr) {
  let len = arr.length;

  // loop through arr
  for (let i = 0; i < len; i++) {
    // keep track of min value
    let min = i;
    // loop through next number in arr
    for (let j = i + 1; j < len; j++) {
      // if min value greater than j set min to j
      if (arr[min] > arr[j]) {
        min = j;
      }
    }

    // if min not = to i swap min with i
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

const array = [8, 2, 1, 4, 9, 3, 5, 7];

console.log(selectionSort(array));
