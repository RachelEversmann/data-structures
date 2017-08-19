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
  return recursiveTreeContains(this, target);
};

var recursiveTreeContains = function(tree, target) {
  var ret = false;
  if (tree.value === target) {
    ret = true;
  } else {
    for (var i = 0; i < tree.children.length; i++) {
      if (ret === true) {
        return true;
      }
      if (tree.children[i] !== undefined) {
        ret = recursiveTreeContains(tree.children[i], target);
      }
    }
  }
  return ret;
};
