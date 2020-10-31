"use strict";

console.log('App.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "This is JSX from app.js! aaaand changes"
    ),
    React.createElement(
        "p",
        null,
        "More info"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            " a"
        ),
        React.createElement(
            "li",
            null,
            " b"
        ),
        React.createElement(
            "li",
            null,
            " c"
        )
    )
);

var count = 0;

var addOne = function addOne() {
    count++;
    console.log("+1");
    renderCounterApp();
};
var subOne = function subOne() {
    count--;
    console.log("-1");
    renderCounterApp();
};
var resetBtn = function resetBtn() {
    count = 0;
    console.log("Reset");
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var template2 = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            count,
            " "
        ),
        React.createElement(
            "button",
            { onClick: subOne },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: resetBtn },
            "RESET"
        ),
        React.createElement(
            "button",
            { onClick: addOne },
            "+1"
        )
    );
    ReactDOM.render(template2, appRoot);
};

renderCounterApp();
