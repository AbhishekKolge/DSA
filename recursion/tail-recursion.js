const tailFactorial = (x, totalSoFar = 1) => {
  if (x === 0) {
    return totalSoFar;
  }

  return tailFactorial(x - 1, totalSoFar * 1);
};
