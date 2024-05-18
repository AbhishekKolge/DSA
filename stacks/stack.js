class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top.value;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }
    const toBeDeletedPointer = this.top;
    const holdingPointer = toBeDeletedPointer.next;
    this.top = holdingPointer;
    this.length--;
    if (this.isEmpty()) {
      this.bottom = null;
    }

    return toBeDeletedPointer.value;
  }

  isEmpty() {
    return this.length === 0;
  }
}

module.exports = Stack;
