var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  return recursiveContains(this, target);
};

var recursiveContains = function (tree, target) {
  var ret = false;
  if (tree.value === target) {
    ret = true;
  } else {
    if (tree.children[0] !== undefined) {
      ret = recursiveContains(tree.children[0], target);
    }
    if (ret === true) {
      return true;
    }
    if (tree.children[1] !== undefined) {
      ret = recursiveContains(tree.children[1], target);
    }
  }
  return ret;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
