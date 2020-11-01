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

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        book.options.push(option);
        console.log(book.options);
        e.target.option.value = "";
        renderBook();
    }
};

var resetOnClick = function resetOnClick() {
    book.options = [];
    renderBook();
};

var book = {
    title: "The great adventures",
    subtitle: "of the small Mongo",
    options: [1, 2, 3, 4, 5]
};
var appRoot = document.getElementById('app');

var renderBook = function renderBook() {

    var template3 = React.createElement(
        "div",
        null,
        book.subtitle && React.createElement(
            "h1",
            null,
            book.title.toUpperCase()
        ),
        book.subtitle && React.createElement(
            "p",
            null,
            book.subtitle
        ),
        React.createElement(
            "p",
            null,
            book.options && book.options.length > 0 ? "Those are the options" : "No no no optios"
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            ),
            React.createElement(
                "ol",
                null,
                book.options.map(function (option) {
                    return React.createElement(
                        "li",
                        { key: option },
                        "Option: ",
                        option
                    );
                })
            )
        ),
        React.createElement(
            "button",
            { onClick: resetOnClick, name: "reset" },
            "Clear all"
        )
    );

    ReactDOM.render(template3, appRoot);
};

renderBook();
