const array = [1, 8, 6, 2, 5, 4, 8, 3, 7];

const calculateArea = (height1, height2, widthStart, widthEnd) => {
  const height = Math.min(height1, height2);
  const width = widthEnd - widthStart;
  return height * width;
};

const findContainerWithMostWater = (array) => {
  const length = array.length;
  let pointer1 = 0;
  let pointer2 = length - 1;
  let maxArea = 0;

  while (pointer1 !== pointer2) {
    const height1 = array[pointer1];
    const height2 = array[pointer2];
    const currentArea = calculateArea(height1, height2, pointer1, pointer2);
    maxArea = Math.max(maxArea, currentArea);

    if (height1 < height2) {
      pointer1++;
    } else {
      pointer2--;
    }
  }
  return maxArea;
};

console.log(findContainerWithMostWater(array));
