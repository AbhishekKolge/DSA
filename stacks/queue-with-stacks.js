class QueueWithStacks {
  constructor() {
    this.in = [];
    this.out = [];
  }

  enqueue(value) {
    this.in.push(value);
  }

  dequeue() {
    if (!this.out.length) {
      while (this.in.length) {
        const value = this.in.pop();
        this.out.push(value);
      }
    }

    return this.out.pop();
  }

  peek() {
    if (!this.out.length) {
      while (this.in.length) {
        const value = this.in.pop();
        this.out.push(value);
      }
    }

    return this.out[this.out.length - 1];
  }

  empty() {
    return !this.in.length && !this.out.length;
  }
}
