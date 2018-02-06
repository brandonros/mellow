var h = virtualDom.h;
var diff = virtualDom.diff;
var patch = virtualDom.patch;
var createElement = virtualDom.create;

var App = function(state, render) {
  var self = this;

  var handler = {
    set: function(obj, prop, value) {
      obj[prop] = value; 

      setTimeout(function() {
        self.redraw();
      }, 0);

      return true;
    },
    get: function(obj, key) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        return new Proxy(obj[key], handler);
      } else {
        return obj[key];
      }
    }
  };

  self.state = new Proxy(state, handler);
};

App.prototype.init = function() {
  var self = this;

  Promise.resolve(render(self.state))
  .then(function(tree) {
    self.tree = tree;
    self.rootNode = createElement(self.tree);

    document.body.appendChild(self.rootNode);
  });
};

App.prototype.redraw = function() {
  var self = this;

  Promise.resolve(render(self.state))
  .then(function(newTree) {
    var patches = diff(self.tree, newTree);

    self.rootNode = patch(self.rootNode, patches);
    self.tree = newTree;
  });
}; 