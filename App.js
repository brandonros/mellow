var h = virtualDom.h;
var diff = virtualDom.diff;
var patch = virtualDom.patch;
var createElement = virtualDom.create;

var App = function(state, render) {
  var self = this;

  self.state = new Proxy(state, {
    set: function(obj, prop, value) {
      obj[prop] = value;

      Promise.resolve(render(obj))
      .then(function(newTree) {
        var patches = diff(self.tree, newTree);

        self.rootNode = patch(self.rootNode, patches);
        self.tree = newTree;
      });

      return true;
    }
  });

  Promise.resolve(render(self.state))
  .then(function(tree) {
    self.tree = tree;
    self.rootNode = createElement(self.tree);

    document.body.appendChild(self.rootNode);
  });
};
