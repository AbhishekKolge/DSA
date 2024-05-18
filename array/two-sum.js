const array = [3, 6, 2, 2, 9, 2];
const target = 8;

const findTwoSum = (array, target) => {
  const matcher = new Map();

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (matcher.has(element)) {
      const firstIndex = matcher.get(element);
      const currentIndex = i;
      const result = [];
      result.push(firstIndex);
      result.push(currentIndex);
      return result;
    }

    const desiredNumber = target - element;
    matcher.set(desiredNumber, i);
  }

  return null;
};

console.log(findTwoSum(array, target));
