const array = [4, 6, 1, 2, 5, 3];

const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  const pivot = array[array.length - 1];
  let pivotIndex = array.length - 1;
  let currentIndex = 0;

  while (currentIndex < pivotIndex) {
    const currentEl = array[currentIndex];

    if (currentEl <= pivot) {
      currentIndex++;
      continue;
    }

    const beforePivotEl = array[pivotIndex - 1];
    const beforePivotIndex = pivotIndex - 1;

    array[beforePivotIndex] = pivot;
    array[pivotIndex] = currentEl;
    pivotIndex = beforePivotIndex;
    array[currentIndex] = beforePivotEl;
  }

  array[pivotIndex] = pivot;

  return [
    ...quickSort(array.slice(0, pivotIndex)),
    pivot,
    ...quickSort(array.slice(pivotIndex + 1)),
  ];
};

console.log(quickSort(array));
