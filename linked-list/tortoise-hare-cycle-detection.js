const findCycle = (head) => {
  if (!head) {
    return head;
  }

  let tortoise = head;
  let hare = head;

  while (true) {
    hare = hare.next;
    tortoise = tortoise.next;

    if (hare === null || hare.next === null) {
      return null;
    }

    hare = hare.next;

    if (tortoise === hare) {
      break;
    }
  }

  let p1 = head;
  let p2 = tortoise;

  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;
};
