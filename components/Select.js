var Option = function(value, label, selected) {
  return h('option', {value: value, selected: selected}, label);
};

module.exports = function(props, options, stateKey) {
  var self = this;

  var children = options.map(function(option) {
    return Option(option.value, option.label, option.value === self.state[stateKey]);
  });

  var onchange = function(event) {
    self.state[stateKey] = event.target.value;

    if (props.onchange) {
      props.onchange(event);
    }
  };

  var extendedProps = props;

  extendedProps = Object.assign({}, props, {onchange: onchange});

  return h('select', extendedProps, children);
};
