// Queue implimentation using a doubly linked list with tail pointer

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(element) {
    const node = new Node(element);

    // if queue is empty node should become head and tail
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      // current tail should point forward to node
      this.tail.next = node;

      // node should point back to current tail
      node.prev = this.tail;

      // node should become new tail
      this.tail = node;
    }

    this.size++;
    return node;
  }

  dequeue() {
    if (this.size === 0) {
      return null;
    } else {
      // save current head to return later
      const current = this.head;

      if (this.size === 1) {
        // after removing the only node there will be no head or tail
        this.head = null;
        this.tail = null;
      } else {
        // set the node after head as new head
        this.head = this.head.next;
        // remove connection from new head to old head
        this.head.prev = null;
        // remove connection from old head to new head
        current.next = null;
      }

      this.size--;
      return current;
    }
  }
}

const newQueue = new LinkedList();
console.log(newQueue);

newQueue.enqueue(435);
newQueue.enqueue(2);
newQueue.enqueue("Yo!");
console.table(newQueue);
newQueue.dequeue();
console.table(newQueue);
newQueue.dequeue();
console.table(newQueue);
newQueue.dequeue();

console.table(newQueue);
