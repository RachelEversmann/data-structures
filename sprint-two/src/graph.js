// Instantiate a new graph
var Graph = function() {
  this.newGraph = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = objNode(node);
  this.newGraph.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var ret = false;
  this.newGraph.forEach(function(el) {
    if (el.value === node) {
      ret = true;
    }
  });
  return ret;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = null;
  var graph = this;
  this.newGraph.forEach(function(el) {
    if (graph.hasEdge(el.value, node)) {
      graph.removeEdge(el.value, node);
    }
  });
  index = this.findNode(node);
  if (index > -1) {
    this.newGraph.splice(index, 1);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var first = this.findNode(fromNode);
  var second = this.findNode(toNode);
  var graph1 = this.newGraph[first];
  var graph2 = this.newGraph[second];
  if (graph1.edges.includes(fromNode) && graph2.edges.includes(toNode)) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var first = this.findNode(fromNode);
  var second = this.findNode(toNode);
  this.newGraph[first].edges.push(fromNode);
  this.newGraph[second].edges.push(toNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var first = this.findNode(fromNode);
  var second = this.findNode(toNode);
  var removeEdges1 = this.newGraph[first].edges;
  var removeEdges2 = this.newGraph[second].edges;
  var index = removeEdges1.indexOf(toNode);
  removeEdges1.splice(index, 1);
  index = removeEdges2.indexOf(fromNode);
  removeEdges2.splice(index, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.newGraph.forEach(function(el) {
    cb(el.value);
  });
};

Graph.prototype.findNode = function(node) {
  var thisNode = objNode(node);
  var index = null;
  var i = 0;
  this.newGraph.forEach(function(el) {
    if (el.value === thisNode.value) {
      index = i;
    }
    i++;
  });
  return index;
};

var objNode = function(value) {
  var newNode = {};
  newNode.value = value;
  newNode.edges = [];
  return newNode;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
