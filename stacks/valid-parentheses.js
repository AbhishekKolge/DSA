const Stack = require('./stack');

// const s = '()';
const s = '()[]{}';
// const s = '(]';

const openingParentheses = ['(', '{', '['];
const closingParentheses = [')', '}', ']'];

const isValidParentheses = (s) => {
  const myStack = new Stack();

  for (let i = 0; i < s.length; i++) {
    const currentParentheses = s[i];

    if (openingParentheses.includes(currentParentheses)) {
      myStack.push(currentParentheses);
      continue;
    }

    if (myStack.isEmpty()) {
      return false;
    }

    const lastParentheses = myStack.pop();

    if (
      openingParentheses.indexOf(lastParentheses) !==
      closingParentheses.indexOf(currentParentheses)
    ) {
      return false;
    }
  }

  return myStack.isEmpty();
};

console.log(isValidParentheses(s));
