var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newObj = {};
  newObj.storage = {};
  newObj.realSize = 0;

  _.extend(newObj, stackMethods);
  return newObj;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.realSize] = value;
  this.realSize++;
};
stackMethods.pop = function() {
  this.realSize--;
  if (this.realSize < 0) {
    this.realSize = 0;
  }
  var ret = this.storage[this.realSize];
  delete this.storage[this.realSize];
  return ret;
};

stackMethods.size = function() {
  return this.realSize;
};
