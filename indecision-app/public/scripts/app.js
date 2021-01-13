'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {

    var template = React.createElement('div', null);

    ReactDOM.render(template, appRoot);
};

renderApp();
