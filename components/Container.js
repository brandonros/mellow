var Header = require('./Header.js');
var Nav = require('./Nav.js');

module.exports = function(children) {
  return h('div', {key: 'Container'}, [
    Header(this.state),
    Nav(this.state),
    children
  ]);
};
