var BinarySearchTree = function(value) {
  var newBinary = {};
  newBinary.myTree = [];
  newBinary.isFirst = true;
  newBinary.binaryTree = {};
  newBinary.value = value;
  newBinary.current = null; // tree
  newBinary.left = 0;
  newBinary.right = 0;

  // your code here
  _.extend(newBinary, binaryMethods);
  return newBinary;
};
//left, right, insert, contains, depthFirstLog
var binaryMethods = {};

binaryMethods.search = function (value, tree) {
  console.log(tree.value);
  if (tree.value === value) {
    return tree;
  } else {
    if (tree.value > value) {
      return tree.search(value, tree.children[1]);
    } else {
      return tree.search(value, tree.children[0]);
    }
  }
};

binaryMethods.insert = function(value) {
  if (this.isFirst) {
    this.myTree[0] = Tree(this.value);
  }
  console.log('tree0', this.myTree[0]);
  if (this.myTree[0].children[0] !== undefined) {
    this.left = this.myTree[0].children[0];
  }
  if (this.myTree[0].children[1] !== undefined) {
    this.right = this.myTree[0].children[1];
  }
  return this.insertWithTree(value, this.myTree[0]);
};

binaryMethods.containsBinary = function(value) {
  return this.myTree[0].contains(value);
};

binaryMethods.depthFirstLog = function(callBack) {

};

binaryMethods.addRight = function (value, tree) {
  if (tree.children[1] === undefined) {
    tree.children[1] = Tree(value);
    return;
  } else {
    tree.insertWithTree(value, tree.children[1]);
  }
};

binaryMethods.addLeft = function (value, tree) {
  if (tree.children[0] === undefined) {
    tree.children[0] = Tree(value);
    return;
  } else {
    tree.insertWithTree(value, tree.children[0]);
  }
};

binaryMethods.insertWithTree = function (value, tree) {
  if (value > tree.value) {
    if (tree.children[1] === undefined) {
      tree.children[1] = Tree(value);
    } else {
      tree.addRight(value, tree);
    }
  } else {
    if (tree.children[0] === undefined) {
      tree.children[0] = Tree(value);
    } else {
      tree.addLeft(value, tree);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
