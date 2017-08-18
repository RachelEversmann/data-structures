var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods, binaryMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value, index) {
  if (arguments.length < 2) {
    this.children.push(Tree(value));
  } else {
    this.children[index] = Tree(value);
  }
};

treeMethods.contains = function(target) {
  return recursiveContains(this, target);
};

var recursiveContains = function (tree, target) {
  var ret = false;
  if (tree.value === target) {
    ret = true;
  } else {
    for (var i = 0; i < tree.children.length ; i++) {
      if (tree.children[i] !== undefined) {
        ret = recursiveContains(tree.children[i], target);
      }
      if (ret === true) {
        return true;
      }
    }

  }
  return ret;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
