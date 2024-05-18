const maximumDepth = (root, count = 0) => {
  if (root === null) {
    return count;
  }
  count++;
  return Math.max(
    maximumDepth(root.left, count),
    maximumDepth(root.right, count)
  );
};
