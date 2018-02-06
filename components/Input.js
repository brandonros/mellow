module.exports = function(props, stateKey) {
  var self = this;
  
  var onkeyup = function(event) {
    self.state[stateKey] = event.target.value;

    if (props.onkeyup) {
      props.onkeyup(event);
    }
  };

  var onchange = function(event) {
    self.state[stateKey] = event.target.value;

    if (props.onchange) {
      props.onchange(event);
    }
  };

  var extendedProps = props;

  if (props.type === 'text') {
    extendedProps = Object.assign({}, props, {onkeyup: onkeyup});
  } else if (props.type === 'checkbox' || props.type === 'radio') {
    extendedProps = Object.assign({}, props, {onchange: onchange});
  }

  if (extendedProps.type === 'radio' && self.state[stateKey] === extendedProps.value) {
    extendedProps.checked = 'checked';
  }

  if (extendedProps.type === 'checkbox' && self.state[stateKey]) {
    extendedProps.checked = 'checked';
  }

  return h('input', extendedProps);
};
