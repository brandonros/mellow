module.exports = {
  render: function(state) {
    return h('div', null, `Home! ${JSON.stringify(state)}`);
  }
};
