module.exports = function(props, stateKey) {
  var self = this;
  
  var onkeyup = function(event) {
    self.state[stateKey] = event.target.value;

    if (props.onkeyup) {
      props.onkeyup(event);
    }
  };

  return h('textarea', Object.assign({}, props, {onkeyup: onkeyup}));
};
