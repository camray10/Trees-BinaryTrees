/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(node = this.root) {
    if (!node) return 0; // base case: empty node
    if (!node.left && !node.right) return 1; // base case: leaf node
    if (!node.left) return this.minDepth(node.right) + 1; // only right child exists
    if (!node.right) return this.minDepth(node.left) + 1; // only left child exists
    return Math.min(this.minDepth(node.left), this.minDepth(node.right)) + 1; // both children exist
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(node = this.root) {
    if (!node) return 0; // base case: empty node
    if (!node.left && !node.right) return 1; // base case: leaf node
    if (!node.left) return this.maxDepth(node.right) + 1; // only right child exists
    if (!node.right) return this.maxDepth(node.left) + 1; // only left child exists
    return Math.max(this.maxDepth(node.left), this.maxDepth(node.right)) + 1; // both children exist
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let curr = this.root;
    let nextLargerValue = null;

    while (curr) {
        if (curr.val > lowerBound) {
            if (nextLargerValue === null || curr.val < nextLargerValue) {
                nextLargerValue = curr.val;
            }
            curr = curr.left;
        } else {
            curr = curr.right;
        }
    }
    return nextLargerValue;
}
}

module.exports = { BinaryTree, BinaryTreeNode };
