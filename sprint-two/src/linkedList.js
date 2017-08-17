var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  var head = 0;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = Node(value);
      list.tail = Node(value);
    } else {
      if (list.head.next === null) {
        list.head.next = Node(value);
      }
      list.tail.next = Node(value);
      list.tail = Node(value);
    }
  };

  list.removeHead = function() {
    if (list.head === null) {
      return null;
    }
    //console.log(list.head,"here");
    var ret = list.head.value;
    list.head = list.head.next;
    return ret;
  };

  list.contains = function(target) {
    return has(list.head, target);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var has = function(obj,target) {
  if (obj.value === target) {
    return true;
  }
  if (obj.next === null) {
    return false;
  }
  return has(obj.next, target);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
