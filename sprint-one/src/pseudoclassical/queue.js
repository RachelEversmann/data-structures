var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.theSize = 0;
  this.index = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.index + this.theSize] = value;
  this.theSize++;
};

Queue.prototype.dequeue = function() {
  this.index++;
  this.theSize--;
  if (this.theSize < 0) {
    this.theSize = 0;
  }
  var ret = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  return ret;
};

Queue.prototype.size = function() {
  return this.theSize;
};
