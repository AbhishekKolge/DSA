const s = 'racecar';
// const s = 'abccdba';
// const s = 'abcdefdba';
// const s = '';
// const s = 'a';
// const s = 'ab';

const validSubPalindrome = (s, left, right) => {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

const isAlmostPalindrome = (s) => {
  if (s.length <= 2) {
    return true;
  }
  const length = s.length;
  let left = 0;
  let right = length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        validSubPalindrome(s, left + 1, right) ||
        validSubPalindrome(s, left, right - 1)
      );
    }

    left++;
    right--;
  }

  return true;
};

console.log(isAlmostPalindrome(s));
