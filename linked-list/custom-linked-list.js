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
}

const myLinkedList = new LinkedList(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.prepend(1);
console.log(JSON.stringify(myLinkedList));
myLinkedList.reverse();
console.log(JSON.stringify(myLinkedList));
