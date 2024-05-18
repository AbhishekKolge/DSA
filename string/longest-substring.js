// const s = 'bbbbb';
// const s = 'pwwkew';
const s = 'pwwkew';

const lengthOfLongestSubstring = (s) => {
  const length = s.length;
  if (length < 2) {
    return length;
  }
  let left = 0;
  let longest = 0;
  const seen = new Map();

  for (let right = 0; right < length; right++) {
    const pointer = s[right];

    if (seen.get(pointer) >= left) {
      left = seen.get(pointer) + 1;
    }
    seen.set(pointer, right);
    const currentLength = right - left + 1;

    longest = Math.max(longest, currentLength);
  }
  return longest;
};

lengthOfLongestSubstring(s);
