const mergeLinkedList = (head) => {
  if (!head) {
    return head;
  }

  let currentNode = head;

  while (currentNode !== null) {
    if (currentNode.child) {
      let childTail = currentNode.child;

      while (childTail.next !== null) {
        childTail = childTail.next;
      }

      const nextNode = currentNode.next;
      const child = currentNode.child;
      if (nextNode) {
        childTail.next = nextNode;
        nextNode.prev = childTail;
      }
      currentNode.next = child;
      child.prev = currentNode;
      currentNode.child = null;
    }

    currentNode = currentNode.next;
  }

  return head;
};
