module.exports = function() {
  var self = this;
  
  return SystemJS.import(self.state.routePaths[state.hash])
    .then(function(routeComponent) {
      return routeComponent.call(self);
    });
};
