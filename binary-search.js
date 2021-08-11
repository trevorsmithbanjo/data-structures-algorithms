// iterative approach
let binarySearch = function (arr, x) {
  let start = 0,
    end = arr.length - 1;

  // Iterate while start doesn't meet end
  while (start <= end) {
    // Find middle index
    let mid = Math.floor((start + end) / 2);

    // If element is present at mid return True
    if (arr[mid] === x) return true;
    // Else look in left or right half accordingly
    else if (arr[mid] < x) {
      start = mid + 1;
    } else end = mid - 1;
  }

  return false;
};

let array = [1, 3, 5, 7, 8, 9];
let num = 5;

console.log("num = 5");
console.log(binarySearch(array, num));

let newNum = 6;
console.log("num = 6");
console.log(binarySearch(array, newNum));
