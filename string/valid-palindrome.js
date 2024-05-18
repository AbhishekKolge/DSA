const s = 'abcacbax';

// const isPalindrome = (s) => {
//   s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

//   if (s === s.split('').toReversed().join('')) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const isPalindrome = (s) => {
//   if (s.length < 2) {
//     return true;
//   }

//   s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

//   const length = s.length;
//   const middle = Math.ceil(length / 2);
//   let right = length - 1;

//   for (let left = 0; left < middle; left++) {
//     if (s[left] !== s[right]) {
//       return false;
//     }

//     right--;
//   }

//   return true;
// };

// const isPalindrome = (s) => {
//   if (s.length < 2) {
//     return true;
//   }

//   s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

//   const length = s.length;
//   const middle = Math.ceil(length / 2);
//   let middleRight = 0;
//   if (length % 2 === 0) {
//     middleLeft = middle - 1;
//     middleRight = middle;
//   } else {
//     middleLeft = middle - 1;
//     middleRight = middle - 1;
//   }
//   let right = middleRight;

//   for (let left = middleLeft; left >= 0; left--) {
//     if (s[left] !== s[right]) {
//       return false;
//     }

//     right++;
//   }

//   return true;
// };

const isPalindrome = (s) => {
  if (s.length < 2) {
    return true;
  }

  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversedS = s.split('').reverse().join('');
  const length = s.length;

  for (let i = 0; i < length; i++) {
    if (s[i] !== reversedS[i]) {
      return false;
    }
  }

  return true;
};

isPalindrome(s);
