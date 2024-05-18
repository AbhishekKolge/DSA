const levelOrder = (node, result = []) => {
  if (!node) {
    return result;
  }

  result.push(node.val);
};
