/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

 sumValues(node = this.root) {
    if (!node) return 0; // base case: empty node
    let sum = node.val; // add value of current node
    for (let child of node.children) {
      sum += this.sumValues(child); // recursively add values of children
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

 countEvens(node = this.root) {
    if (!node) return 0; // base case: empty node
    let count = node.val % 2 === 0 ? 1 : 0; // add 1 if current node is even
    for (let child of node.children) {
      count += this.countEvens(child); // recursively count even nodes in children
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

 numGreater(lowerBound, node = this.root) {
    if (!node) return 0; // base case: empty node
    let count = node.val > lowerBound ? 1 : 0; // add 1 if current node is greater than lowerBound
    for (let child of node.children) {
      count += this.numGreater(lowerBound, child); // recursively count nodes with value > lowerBound in children
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
