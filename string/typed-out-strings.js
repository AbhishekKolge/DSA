const S = 'bxj##tw';
const T = 'bxo#j##tw';

const checkTypedOutStrings = (string1, string2) => {
  let index1 = string1.length - 1;
  let index2 = string2.length - 1;
  let backspace1 = 0;
  let backspace2 = 0;

  while (index1 >= 0 || index2 >= 0) {
    if (string1[index1] === '#') {
      backspace1++;
      index1--;
      continue;
    } else if (backspace1 > 0) {
      index1 = index1 - 1;
      backspace1 = backspace1 - 1;
      continue;
    }

    if (string2[index2] === '#') {
      backspace2++;
      index2--;
      continue;
    } else if (backspace2 > 0) {
      index2 = index2 - 1;
      backspace2 = backspace2 - 1;
      continue;
    }

    if (string1[index1] !== string2[index2]) {
      return false;
    }

    index1--;
    index2--;
  }

  return true;
};

console.log(checkTypedOutStrings(S, T));
