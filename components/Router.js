module.exports = {
  render: function(state) {
    return SystemJS.import(state.routePaths[state.hash])
      .then(function(routeComponent) {
        return routeComponent.render(state);
      });
  }
};
