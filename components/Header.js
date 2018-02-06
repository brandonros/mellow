var logout = function() {
  console.log('here', this.state);
};

var css = `.header {
  color: white;
}

.header .dark-background {
  background-color: #333333;
}

.header .medium-background {
  background-color: #ff0000;
}

.header .subnav {
  color: white;
  min-height: 50px;
  padding-top: 10px;
}

.header .subnav .btn-link {
  color: white;
}

.header .small-font {
  font-size: 14px;
}

.header .log-out-button,
.header .log-out-button:hover {
  margin-top: 6px;
  font-size: 16px;
  margin-right: 10px;
  color: white;
}

.header .log-out-button:focus,
.header .log-out-button:hover {
  text-decoration: none;
}

.header h2 {
  font-size: 18px;
}

.header .agent-name {
  overflow: hidden;
  max-height: 48px;
}

.header .account-details {
  display: inline-block;
  max-width: 150px;
  white-space: nowrap;
}

@media (max-width: 1035px) {
  .header .date-and-time {
    display: none;
  }
}`;

var Top = function() {
  return h('div', { key: 'navTop', className: 'container-fluid dark-background' }, [
    h('div', { className: 'row' }, [
      h('div', { className: 'col-sm-4' }, [
        h('a', {href: '#/', id: 'logo', name: 'logo', tabindex: '0'}, [
          h('span', {className: 'margin-left margin-right', name: 'header-label'}, 'Example app')
        ])
      ]),
      h('div', { className: 'col-sm-4 text-center user-name ng-binding', name: 'user-name'}, [
        'Welcome',
        h('br'),
        this.state.userName
      ]),
      h('div', { className: 'col-sm-4 text-right'}, [
        h('div', { className: 'row'}, [
          h('div', { className: 'col-sm-8'}, [
            h('div', { className: 'date-and-time ng-binding'}, [
              this.state.time,
              h('br'),
              this.state.date
            ])
          ]),
          h('div', { className: 'col-sm-4'}, [
            h('button', { className: 'btn btn-link log-out-button', 'onclick': logout, name: 'logout-btn' }, [
              'Log out',
              h('span', {className: 'glyphicon glyphicon-log-out'})
            ])
          ])
        ])
      ])
    ])
  ]);
};

var Bottom = function() {
  return h('div', { key: 'navBottom', className: 'container-fluid medium-background subnav'}, [
    h('div', { className: 'row'}, [
      h('div', { className: 'col-sm-4'}, [
        this.state.selectedAccount
      ])
    ])
  ]);
};

module.exports = function() {
  return h('nav', { key: 'header', className: 'navbar navbar-fixed-top header' }, [
    h('style', { key: 'headerStyle' }, css),
    Top(),
    Bottom()
  ]);
};
