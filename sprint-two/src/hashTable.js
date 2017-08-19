var HashTable = function(limit) {
  this._limit = limit;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var obj = this._storage.get(index);
  if (!obj) {
    obj = {};
  }
  obj[k] = v;
  this._storage.set(index, obj);
};

HashTable.prototype.retrieve = function(k) {
  // default case - do later
  //interate through hastTable
  var ret;
  this._storage.each(function(storageI, i, storage) {
    //interate through arrays with same index
    if (storageI) {
        // find key in array of index
      if (storageI[k]) {
        ret = storageI[k];
      }
    }
  });
  return ret;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
