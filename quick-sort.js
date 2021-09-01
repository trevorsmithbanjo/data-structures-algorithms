// Function to swap items
function swap(items, leftIndex, rightIndex) {
  let temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

// Function to select middle item as pivot
function partition(items, left, right) {
  let pivot = items[Math.floor((right + left) / 2)],
    i = left,
    j = right;

  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
}

// quick sort function calls partition and works recursivly
function quickSort(items, left, right) {
  let index;

  if (items.length > 1) {
    index = partition(items, left, right); // index returned from partition

    if (left < index - 1) {
      // more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }

    if (index < right) {
      // more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }

  return items;
}

const itemsArray = [5, 3, 7, 6, 2, 9];

const sortedArray = quickSort(itemsArray, 0, itemsArray.length - 1);
console.log(sortedArray);
