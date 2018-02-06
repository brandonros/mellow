var Link = require('./Link.js');

module.exports = function() {
  var navOptions = this.state.navOptions.map(function (navOption, index) {
    return h('li', {key: navOption.link}, [
      Link(navOption.link, navOption.title)
    ]);
  });

  return h('div', { key: 'nav', 'style': 'margin-top: 90px', 'className': (this.state.navbarHidden ? 'display-none' : '') + ' navbar-component' }, [
    h('nav', { 'className': 'navbar navbar-default', role: 'navigation' }, [
      h('ul', { 'className': 'nav navbar-nav' }, navOptions)
    ])
  ]);
};
