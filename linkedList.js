// Define node
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

// Linked list
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;

    // functions to be implemented
    // add(element)
    // insertAt(element, location)
    // removeFrom(location)
    // removeFrom(element)

    //Helper Methods
    // isEmpty
    // size_Of_List
    // PrintList
  }

  // Adds an element at the end of the list
  add(element) {
    // creates new node
    const node = new Node(element);

    // to store current node
    let current;

    // if list is empty add element and make it the head
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      // iterate to the end of list
      while (current.next) {
        current = current.next;
      }

      // add node
      current.next = node;
    }

    this.size++;
  }

  // insert element at index
  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      return console.log("Please enter a valid index.");
    } else {
      // creates a new node
      const node = new Node(element);
      let curr, prev;

      curr = this.head;

      // add element to the first index
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;

        // iterate over list to find point to insert element
        for (let i = 0; i < index; i++) {
          prev = curr;
          curr = curr.next;
        }

        // adding element
        node.next = curr;
        prev.next = node;
      }

      this.size++;
    }
  }

  // removes element from specific location
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return console.log("Please enter a valid index.");
    } else {
      let current = this.head;
      let prev = 0;

      // deleting first element
      if (index === 0) {
        this.head = current.next;
      } else {
        // iterate over list to location to remove
        for (let i = 0; i < index; i++) {
          prev = current;
          current = current.next;
        }

        // revove the element
        prev.next = current.next;
      }
      this.size--;

      // return removed element
      return current.element;
    }
  }

  // removes a given element from list
  removeElement(element) {
    let current = this.head;
    let prev = null;

    // iterate over list
    while (current !== null) {
      // compare element with current element
      // if found remove and return true
      if (current.element === element) {
        if (prev === null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }

  // finds index of element
  indexOf(element) {
    let count = 0;
    let current = this.head;

    // iterate over the list
    while (current !== null) {
      // compare each element of list with given element
      if (current.element === element) return count;
      count++;
      current = current.next;
    }

    return -1;
  }

  isEmpty() {
    return this.size === 0;
  }

  size_Of_List() {
    console.log(this.size);
  }

  printList() {
    let current = this.head;
    let str = "";

    while (current) {
      str += current.element + " ";
      current = current.next;
    }
    console.log(str);
  }
}

// implementations of linked list
let ll = new LinkedList();

console.log(ll.isEmpty());

ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

ll.printList();

console.log("Is element removed? " + ll.removeElement(50));

ll.printList();

console.log("Index of 40 " + ll.indexOf(40));

ll.insertAt(60, 2);

ll.printList();

console.log("Is list empty?");
console.log(ll.isEmpty());

console.log(ll.removeFrom(3));

ll.printList();
