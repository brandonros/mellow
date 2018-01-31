module.exports = {
  render: function(state, children) {
    return h(
      "div",
      null,
      [
        Link('#/', 'Home'),
        Link('#/about', 'About'),
       children
      ]
    );
  }
};
