// circular array with 2 arrays
function circleWithTwo(a, number, index) {
  // Create aux array of twice the size
  let b = Array(2 * number);

  // copy a to b 2 times
  for (let i = 0; i < number; i++) {
    b[i] = b[number + i] = a[i];
  }

  // print from index-th index to (number + i)-th index
  for (let i = index; i < number + index; i++) {
    console.log(`${b[i]}`);
  }
}

let newA = ["A", "B", "C", "D", "E", "F"];
let num = 6;
console.log("with two arrays");
console.log(circleWithTwo(newA, num, 3));

// Circular array using mod...The better way!
function circularWithMod(a, number, index) {
  // Print from index to (number + i)-th index
  for (let i = index; i < number + index; i++) {
    console.log(`${a[parseInt(i % number)]}`);
  }
}

console.log("with mod");
console.log(circularWithMod(newA, num, 3));
