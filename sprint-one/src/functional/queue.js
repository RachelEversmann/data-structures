var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values

  // Implement the methods below
  var storage = {};
  var size = 0;
  var index = 0;

  someInstance.enqueue = function(value) {
    storage[size+index] = value;
    size++;
  };

  someInstance.dequeue = function() {
    index++;
    size--;
    if (size < 0) {
      size = 0;
    }
    var ret = storage[index-1];
    delete storage[index-1];
    return ret;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
