var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(index);
  if (arr === undefined) {
    arr = [];
  }
  var rightValue = arr.push([k,v]);
  this._storage.set(index,arr);
  console.log(arr);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // default case - do later
  //interate through hastTable
  this._storage.each(function(storageI, i, storage) {
    //interate through arrays with same index
    console.log(storageI);
    if(storageI !== undefined) {
      for (var j = 0; j < storageI.length; j++) {
        // find key in array of index
        if(storageI[j][0] === k) {
          return storageI[j][1];
        }
        //return dup[1] of array of index k

      }
    }
  });


};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
