var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  storage = {};
  realSize = 0;

};

Stack.prototype.push = function(value) {
  this.storage[this.realSize] = value;
  this.realSize++;
};

Stack.prototype.pop = function() {
  this.realSize--;
  if (this.realSize < 0) {
    this.realSize = 0;
  }
  var ret = this.storage[this.realSize];
  delete this.storage[this.realSize];
  return ret;
};

Stack.prototype.size = function() {
  return this.realSize;
};
