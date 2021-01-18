"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteAllOptions = _this.handleDeleteAllOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOptionSingular = _this.handleDeleteOptionSingular.bind(_this);
        _this.state = {
            options: props.options
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "handleDeleteAllOptions",
        value: function handleDeleteAllOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: "handleDeleteOptionSingular",
        value: function handleDeleteOptionSingular(optionToRemove) {
            console.log("delete", optionToRemove);
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: "handlePick",
        value: function handlePick() {
            alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
        }
    }, {
        key: "handleAddOption",
        value: function handleAddOption(option) {
            if (!option) {
                return "Enter valid item";
            } else if (this.state.options.indexOf(option) > -1) {
                return "Item already in list";
            } else {
                this.setState(function (prevState) {
                    return { options: prevState.options.concat([option]) };
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var subTitle = "You let a PC choose for you";
            return React.createElement(
                "div",
                null,
                React.createElement(Header, {
                    subTitle: subTitle
                }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 1,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteAllOptions: this.handleDeleteAllOptions,
                    handleDeleteOption: this.handleDeleteOptionSingular
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []

    // // Header as component with state
    // class Header extends React.Component {
    //     render() {
    //         return (
    //             <div>
    //                 <h1>{this.props.title}</h1>
    //                 <h2>{this.props.subTitle}</h2>
    //             </div>
    //         )
    //     }
    // };


    // Header as stateless funktional component
};var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        props.subTitle && React.createElement(
            "h2",
            null,
            props.subTitle
        )
    );
};
Header.defaultProps = {
    title: "Indecision App"

    // // Action as class component with state
    // class Action extends React.Component {
    //     render() {
    //         return (
    //             <div>
    //                 <button
    //                     onClick={this.props.handlePick}
    //                     disabled={!this.props.hasOptions}
    //                 >
    //                     What shoud I do
    //                 </button>
    //             </div>
    //         )
    //     }
    // }

};var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            {
                onClick: props.handlePick,
                disabled: !props.hasOptions
            },
            "What shoud I do"
        )
    );
};

// // Options as class component with state
// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>Options come here as a list below</p>
//                 <p>there are exactly {this.props.options.length} options to choose from</p>
//                 <ul>
//                     {this.props.options.map((opt) => <Option key={opt} optionText={opt} />)}
//                 </ul>
//                 <button onClick={this.props.handleDeleteAllOptions}>Remove all</button>
//             </div>
//         )
//     }
// }

var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "p",
            null,
            "Options come here as a list below"
        ),
        React.createElement(
            "p",
            null,
            "there are exactly ",
            props.options.length,
            " options to choose from"
        ),
        React.createElement(
            "ul",
            null,
            props.options.map(function (opt) {
                return React.createElement(Option, {
                    key: opt,
                    optionText: opt,
                    handleDeleteOption: props.handleDeleteOption
                });
            })
        ),
        React.createElement(
            "button",
            { onClick: props.handleDeleteAllOptions },
            "Remove all"
        )
    );
};

// // Option as class component with state
// class Option extends React.Component {
//     render() {
//         return (
//             <li>{this.props.optionText}</li>
//         )
//     }
// }

var Option = function Option(props) {

    return React.createElement(
        "p",
        null,
        React.createElement(
            "li",
            null,
            props.optionText,
            React.createElement(
                "button",
                {
                    onClick: function onClick(e) {
                        props.handleDeleteOption(props.optionText);
                    }
                },
                "X"
            )
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: "handleAddOption",
        value: function handleAddOption(e) {
            e.preventDefault();
            var newOption = e.target.elements.newOption.value.trim();
            var error = this.props.handleAddOption(newOption);
            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    "Code adding options here"
                ),
                this.state.error && React.createElement(
                    "p",
                    null,
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.handleAddOption },
                    React.createElement("input", { type: "text", name: "newOption" }),
                    React.createElement(
                        "button",
                        null,
                        "Add new"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

/* 
    Stateless functional component
*/
// const User = (props)=>{
//     return(
//         <div>
//         <p>Name: {props.name}</p>
//         </div>
//     )
// }


ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
