const array = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];

const getTrappedWater = (array) => {
  const length = array.length;
  let totalWater = 0;
  let leftPointer = 0;
  let rightPointer = length - 1;
  let maxLeft = array[leftPointer];
  let maxRight = array[rightPointer];

  while (leftPointer !== rightPointer) {
    const leftEl = array[leftPointer];
    const rightEl = array[rightPointer];
    if (leftEl <= rightEl) {
      if (leftEl >= maxLeft) {
        maxLeft = leftEl;
        leftPointer++;
      } else {
        totalWater += maxLeft - leftEl;
        leftPointer++;
      }
    } else {
      if (rightEl >= maxRight) {
        maxRight = rightEl;
        rightPointer--;
      } else {
        totalWater += maxRight - rightEl;
        rightPointer--;
      }
    }
  }

  return totalWater;
};

getTrappedWater(array);
