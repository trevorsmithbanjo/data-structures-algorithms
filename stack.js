function createStack() {
  let stack = [];
  return stack;
}

// Check if stack is empty
function isEmpty(stack) {
  return stack.length === 0;
}

// Add item to stack
function push(stack, item) {
  stack.push(item);
}

// Remove item from stack
function pop(stack) {
  if (isEmpty(stack)) {
    return null;
  }

  return stack.pop();
}

let stack = createStack();

push(stack, "10");
console.log(`${pop(stack)} from stack`);
