var BinarySearchTree = function(value) {
  var newBinary = {};
  newBinary.value = value;
  newBinary.left = null;
  newBinary.right = null;

  // your code here
  _.extend(newBinary, binaryMethods);
  return newBinary;
};
//left, right, insert, contains, depthFirstLog
var binaryMethods = {};

binaryMethods.insert = function(value) {
  if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.insertTree(value, this.right);
    }
  } else {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.insertTree(value, this.left);
    }
  }
};

binaryMethods.contains = function(value) {
  return recursiveBinaryContains(this, value);
};

binaryMethods.depthFirstLog = function(callBack) {
  if (this.value) {
    callBack(this.value);
  }
  if (this.right) {
    this.right.depthFirstLog(callBack);
  }
  if (this.left) {
    this.left.depthFirstLog(callBack);
  }
};

binaryMethods.insertTree = function (value, bTree) {
  if (value > bTree.value) {
    if (bTree.right === null) {
      bTree.right = BinarySearchTree(value);
    } else {
      bTree.insertTree(value, bTree.right);
    }
  } else {
    if (bTree.left === null) {
      bTree.left = BinarySearchTree(value);
    } else {
      bTree.insertTree(value, bTree.left);
    }
  }
};

var recursiveBinaryContains = function (tree, value) {
  if (value === tree.value) {
    return true;
  } else if (tree.right && value > tree.value) {
    return recursiveBinaryContains (tree.right, value);
  } else if (tree.left && value < tree.value) {
    return recursiveBinaryContains (tree.left, value);
  } else {
    return false;
  }
};
// var recursiveBinaryContains = function (tree, target) {
//   var ret = false;
//   if(!tree) {
//     ret = false;
//   } else {
//     if (tree.right) {
//       if (tree.right.value === target) {
//         ret = true;
//       }
//     }
//     if (tree.left) {
//       if(tree.left.value === target) {
//         ret = true;
//       }
//     }
//     if (tree.value === target) {
//       ret = true;
//     } else if (target > tree.value) {
//       ret =  recursiveBinaryContains(tree.right,target);
//     } else if( target < tree.value){
//       ret =  recursiveBinaryContains(tree.left,target);
//     }
//   }
//   return ret;
// };

/*
 * Complexity: What is the time complexity of the above functions?
 */
