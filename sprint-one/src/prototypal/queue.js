var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.theSize = 0;
  newQueue.index = 0;

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.index + this.theSize] = value;
  this.theSize++;
};

queueMethods.dequeue = function() {
  this.index++;
  this.theSize--;
  if (this.theSize < 0) {
    this.theSize = 0;
  }
  var ret = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  return ret;
};

queueMethods.size = function() {
  return this.theSize;
};
