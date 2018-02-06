var sort = function(tableSorting, columnId) {
  if (tableSorting.columnId === columnId) {
    if (tableSorting.direction === 'ascending') {
      tableSorting.direction = 'descending';
    } else {
      tableSorting.direction = 'ascending';
    }
  } else {
    tableSorting.columnId = columnId;
    tableSorting.direction = 'ascending';
  }
};

module.exports = function(tableSorting, columns, rows) {
  var sortedRows = rows.slice(0).sort(function(a, b) {
    var aValue = a[tableSorting.columnId];
    var bValue = b[tableSorting.columnId];

    if (tableSorting.direction === 'ascending') {
      if (aValue < bValue) {
        return -1;
      } else if (aValue > bValue) {
        return 1;
      }
    } else {
      if (aValue < bValue) {
        return 1;
      } else if (aValue > bValue) {
        return -1;
      }
    }

    return 0;
  });

  var thNodes = columns.map(function(column) {
    return h('th', {onclick: function() { sort(tableSorting, column.id); }}, column.label);
  });

  var trNodes = sortedRows.map(function(row) {
    return h('tr', columns.map(function(column) {
      return h('td', row[column.id].toString());
    }));
  });

  return h('table', {className: 'table table-bordered'}, [
    h('thead', [
      h('tr', thNodes)
    ]),
    h('tbody', trNodes)
  ]);
};