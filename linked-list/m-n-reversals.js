class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  reverse() {
    if (!this.head.next) {
      return;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const third = second.next;
      second.next = first;
      first = second;
      second = third;
    }

    this.head.next = null;
    this.head = first;
  }

  reverseBetween(p1, p2) {
    if (p1 === p2) {
      return this.head;
    }
    if (p1 > p2) {
      return this.head;
    }
    let currentNode = this.head;
    let prevNode = null;
    let currentPoint = 1;

    while (currentPoint <= p1) {
      if (currentPoint === p1) {
        const node = this._reverse(currentNode, currentPoint, p2);
        if (p1 !== 1) {
          prevNode.next = node;
        } else {
          this.head = node;
        }
        if (p2 === this.length) {
          this.tail = currentNode;
        }
      } else {
        const nextNode = currentNode.next;
        prevNode = currentNode;
        currentNode = nextNode;
      }

      currentPoint++;
    }
  }

  _reverse(node, currentPoint, p2) {
    let currentNode = node;
    const firstNode = node;
    let prevNode = null;

    while (currentPoint <= p2) {
      const nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;

      currentPoint++;
    }

    firstNode.next = currentNode;

    return prevNode;
  }
}

const myLinkedList = new LinkedList(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.append(6);
myLinkedList.append(7);
myLinkedList.prepend(1);
// myLinkedList.reverse();
myLinkedList.reverseBetween(3, 5);
console.log(JSON.stringify(myLinkedList));
