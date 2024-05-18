const s = 'lee(t(c)o)de)';

const removeInvalidBrackets = (s) => {
  const res = [...s];
  const stack = [];

  for (let i = 0; i < res.length; i++) {
    const currentEl = res[i];

    if (currentEl === '(') {
      stack.push(i);
      continue;
    }

    if (currentEl === ')' && stack.length) {
      stack.pop();
      continue;
    }

    if (currentEl === ')') {
      res[i] = '';
    }
  }

  while (stack.length) {
    const index = stack.pop();
    res[index] = '';
  }

  return res.join('');
};

console.log(removeInvalidBrackets(s));
