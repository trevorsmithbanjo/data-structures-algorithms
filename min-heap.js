class MinHeap {
  constructor() {
    // initializing the array heap and adding a dummy element at index 0
    this.heap = [null];
  }

  getMin() {
    // accessing the min element at index 1
    return this.heap[1];
  }

  insert(node) {
    // inserting new node at end of heap array
    this.heap.push(node);

    if (this.heap.length > 1) {
      let current = this.heap.length - 1;

      // traversing up the parent node until the current node is greater than parent (current/2)
      while (
        current > 1 &&
        this.heap[Math.floor(current / 2)] > this.heap[current]
      ) {
        // swapping the two nodes by destructuring
        [this.heap[Math.floor(current / 2)], this.heap[current]] = [
          this.heap[current],
          this.heap[Math.floor(current / 2)],
        ];
        current = Math.floor(current / 2);
      }
    }
  }

  remove() {
    // smallest element is at the index 1 in the heap array
    let smallest = this.heap[1];

    // when there are more than two elements in the array, we put the right most element at the first position and stop comparing nodes with child nodes

    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);

      if (this.heap.length === 3) {
        if (this.heap[1] > this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }

        return smallest;
      }

      let current = 1;
      let leftChildIndex = current * 2;
      let rightChildIndex = current * 2 + 1;

      while (
        this.heap[leftChildIndex] &&
        this.heap[rightChildIndex] &&
        (this.heap[current > this.heap[leftChildIndex]] ||
          this.heap[current > this.heap[rightChildIndex]])
      ) {
        if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
          [this.heap[current], this.heap[leftChildIndex]] = [
            this.heap[leftChildIndex],
            this.heap[current],
          ];
          current = leftChildIndex;
        } else {
          [this.heap[current], this.heap[rightChildIndex]] = [
            this.heap[rightChildIndex],
            this.heap[current],
          ];
          current = rightChildIndex;
        }

        leftChildIndex = current * 2;
        rightChildIndex = current * 2 + 1;
      }
    }

    // if there are only two elements in the array, we directly splice out the first element
    else if (this.heap.length === 2) {
      this.heap.splice(1, 1);
    } else {
      return null;
    }

    return smallest;
  }
}

const MH = new MinHeap();

MH.insert(2);
console.log(MH);
MH.insert(23);
MH.insert(4);
MH.insert(11);
MH.insert(3);
console.table(MH);
MH.remove();
console.table(MH);
