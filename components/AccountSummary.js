var Input = require('./Input.js');
var Select = require('./Select.js');
var TextArea = require('./TextArea.js');
var Table = require('./Table.js');

module.exports = function() {
  return h('div', null, [
    Input({type: 'text'}, 'text'),
    Input({type: 'checkbox'}, 'checkbox'),
    Input({type: 'radio', name: 'radio', value: '1'}, 'radio'),
    Input({type: 'radio', name: 'radio', value: '2'}, 'radio'),
    Input({type: 'radio', name: 'radio', value: '3'}, 'radio'),
    Input({type: 'button'}, 'button'),
    Select({}, [{value: '', label: ''}, {value: 'value', label: 'label'}], 'select'),
    TextArea({}, 'textarea'),
    Table(this.state.table.sorting, this.state.table.columns, this.state.table.rows)
  ]);
};