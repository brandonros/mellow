module.exports = {
  render: function(state) {
    return h('div', null, `About! ${JSON.stringify(state)}`);
  }
};
