const array = [4, 6, 1, 2, 5, 3];

const quickSort = (array, left = 0, right = 0) => {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[array.length - 1];
  let pivotIndex = array.length - 1;

  while (right <= pivotIndex) {
    if (array[right] > pivot) {
      right++;
      continue;
    }

    let holdingValue = array[left];
    array[left] = array[right];
    array[right] = holdingValue;

    left++;
    right++;
  }

  return [
    ...quickSort(array.slice(0, left - 1)),
    pivot,
    ...quickSort(array.slice(left)),
  ];
};

console.log(quickSort(array));
