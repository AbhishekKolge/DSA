const findCycle = (head) => {
  let currentNode = head;
  const seen = new Set();

  while (!seen.has(currentNode)) {
    if (currentNode.next === null) {
      return null;
    }
    seen.add(currentNode);
    currentNode = currentNode.next;
  }

  return currentNode;
};
