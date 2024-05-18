const array = [1, 2, 3, 4, 5, 6, 7];
const target = 13;

const binarySearch = (array, target) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const foundValue = array[mid];

    if (foundValue < target) {
      left = mid + 1;
      continue;
    }

    if (foundValue > target) {
      right = mid - 1;
      continue;
    }

    if (foundValue === target) {
      return mid;
    }
  }

  return -1;
};

binarySearch(array, target);
